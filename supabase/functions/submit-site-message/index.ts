import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Emails visitor feedback and event suggestions to the site owner via Web3Forms,
// the same delivery path as submit-partner-enquiry. Nothing is published automatically.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function getClientIP(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function checkRateLimit(clientIP: string) {
  const now = Date.now();
  const record = rateLimitStore.get(clientIP);
  if (!record || now > record.resetTime) {
    rateLimitStore.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) return { allowed: false };
  record.count++;
  return { allowed: true };
}

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Trim, collapse to a single line (for subjects) and cap the length.
const oneLine = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : "";
const text = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!checkRateLimit(getClientIP(req)).allowed) {
      return json(429, { error: "Too many requests. Please try again later." });
    }

    let body: any;
    try {
      body = await req.json();
    } catch {
      return json(400, { error: "Invalid JSON in request body" });
    }

    // Spam guard: the honeypot field is hidden from people, so only bots fill it in.
    // Pretend it worked so the bot learns nothing, but send nothing.
    if (typeof body.company_website === "string" && body.company_website.trim() !== "") {
      return json(200, { success: true });
    }

    const type = body.type;
    let subject: string;
    let fields: Record<string, string>;
    let replyto: string | undefined;

    if (type === "feedback") {
      const message = text(body.message, 2000);
      const email = oneLine(body.email, 255);
      const page = oneLine(body.page, 200) || "unknown";
      if (message.length < 2) return json(400, { error: "Please tell us what you'd like to see." });
      if (email && !EMAIL_RE.test(email)) return json(400, { error: "That email address doesn't look right." });

      subject = `Guide feedback: ${page}`;
      replyto = email || undefined;
      fields = {
        Page: page,
        Message: message,
        Email: email || "— (no reply requested)",
      };
    } else if (type === "event") {
      const eventName = oneLine(body.event_name, 150);
      const dates = oneLine(body.dates, 100);
      const time = oneLine(body.time, 100);
      const venue = oneLine(body.venue, 200);
      const link = oneLine(body.link, 500);
      const name = oneLine(body.name, 100);
      const email = oneLine(body.email, 255);
      const notes = text(body.notes, 2000);

      if (!eventName) return json(400, { error: "Please enter the event name." });
      if (!dates) return json(400, { error: "Please enter the date(s)." });
      if (!venue) return json(400, { error: "Please enter the venue." });
      if (!/^https?:\/\/\S+$/i.test(link)) return json(400, { error: "Please enter a link starting with http:// or https://" });
      if (!EMAIL_RE.test(email)) return json(400, { error: "A valid email address is required." });

      subject = `Event suggestion: ${eventName} (${dates})`;
      replyto = email;
      fields = {
        Event: eventName,
        Dates: dates,
        Time: time || "—",
        Venue: venue,
        Link: link,
        Name: name || "—",
        Email: email,
        Notes: notes || "—",
      };
    } else {
      return json(400, { error: "Unknown message type." });
    }

    const accessKey = Deno.env.get("WEB3FORMS_ACCESS_KEY");
    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not configured");
      return json(500, { error: "Email service is not configured. Please try again later." });
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject,
        from_name: type === "event" ? "Townsville Guide — Event suggestions" : "Townsville Guide — Feedback",
        ...(replyto ? { replyto } : {}),
        ...fields,
        Submitted_At: new Date().toISOString(),
      }),
    });

    const resJson = await res.json().catch(() => ({}));
    if (!res.ok || (resJson as any)?.success === false) {
      console.error("Web3Forms error:", res.status, resJson);
      return json(502, { error: "Could not send your message. Please try again later." });
    }

    return json(200, { success: true });
  } catch (err) {
    console.error("Edge function error:", err);
    return json(500, { error: "Something went wrong. Please try again later." });
  }
});
