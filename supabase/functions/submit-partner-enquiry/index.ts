import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

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

const TIER_LABELS: Record<string, string> = {
  community: "Community Listing (free)",
  founding: "Founding Partner ($49/mo)",
  gameday: "Game Day / Peak Placement ($99/mo)",
  other: "Not sure / Something else",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const clientIP = getClientIP(req);
    if (!checkRateLimit(clientIP).allowed) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    let body: any;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON in request body" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, email, business_name, website, tier, message } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return new Response(JSON.stringify({ error: "Name is required and must be between 2 and 100 characters." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) || email.trim().length > 255) {
      return new Response(JSON.stringify({ error: "A valid email address is required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (!tier || !["community", "founding", "gameday", "other"].includes(tier)) {
      return new Response(JSON.stringify({ error: "Please select a valid tier." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (business_name && (typeof business_name !== "string" || business_name.trim().length > 100)) {
      return new Response(JSON.stringify({ error: "Business name must be less than 100 characters." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (website && (typeof website !== "string" || website.trim().length > 255)) {
      return new Response(JSON.stringify({ error: "Website/social link must be less than 255 characters." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (message && (typeof message !== "string" || message.trim().length > 2000)) {
      return new Response(JSON.stringify({ error: "Message must be less than 2000 characters." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanBusiness = business_name?.trim() || null;
    const cleanWebsite = website?.trim() || null;
    const cleanMessage = message?.trim() || null;
    const tierLabel = TIER_LABELS[tier] ?? tier;

    // 1) Store in DB as backup
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (supabaseUrl && serviceRoleKey) {
      const supabase = createClient(supabaseUrl, serviceRoleKey);
      const { error: rpcError } = await supabase.rpc("submit_partner_enquiry", {
        _name: cleanName,
        _email: cleanEmail,
        _business_name: cleanBusiness,
        _website: cleanWebsite,
        _tier: tier,
        _message: cleanMessage,
      });
      if (rpcError) {
        console.error("DB backup insert failed:", rpcError);
        // continue — email is the primary path
      }
    }

    // 2) Send email via Web3Forms
    const accessKey = Deno.env.get("WEB3FORMS_ACCESS_KEY");
    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Email service is not configured. Please try again later." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const subject = `New Partner Enquiry: ${tierLabel} — ${cleanBusiness ?? cleanName}`;
    const web3Payload = {
      access_key: accessKey,
      subject,
      from_name: "Townsville Guide — Partner Enquiries",
      // Web3Forms will set the reply-to to this email address
      replyto: cleanEmail,
      // Human-friendly fields (Web3Forms includes all fields in the email body)
      Name: cleanName,
      Email: cleanEmail,
      Business: cleanBusiness ?? "—",
      Website: cleanWebsite ?? "—",
      Tier: tierLabel,
      Message: cleanMessage ?? "—",
      Submitted_At: new Date().toISOString(),
    };

    const web3Res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(web3Payload),
    });

    const web3Json = await web3Res.json().catch(() => ({}));
    if (!web3Res.ok || (web3Json as any)?.success === false) {
      console.error("Web3Forms error:", web3Res.status, web3Json);
      return new Response(
        JSON.stringify({ error: "Could not send your enquiry. Please try again later." }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again later." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
