import { useState } from "react";
import { CalendarPlus, CheckCircle, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EMAIL = "greenslopesdirect@gmail.com";

const EMPTY = {
  event_name: "",
  dates: "",
  time: "",
  venue: "",
  link: "",
  name: "",
  email: "",
  notes: "",
};

type Field = {
  key: keyof typeof EMPTY;
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  max: number;
};

const FIELDS: Field[] = [
  { key: "event_name", label: "Event name", required: true, max: 150 },
  { key: "dates", label: "Date(s)", required: true, placeholder: "e.g. Sat 14 Nov", max: 100 },
  { key: "time", label: "Time", placeholder: "e.g. 6:00pm–9:00pm", max: 100 },
  { key: "venue", label: "Venue", required: true, max: 200 },
  {
    key: "link",
    label: "Link to the official event page or ticketing",
    required: true,
    type: "url",
    placeholder: "https://",
    max: 500,
  },
  { key: "name", label: "Your name", max: 100 },
  { key: "email", label: "Your email", required: true, type: "email", max: 255 },
];

/** "Running an event in Townsville?" card. Emails the suggestion to the site owner; nothing is published automatically. */
const SuggestEventForm = () => {
  const [values, setValues] = useState(EMPTY);
  const [honeypot, setHoneypot] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof EMPTY, v: string) => setValues((p) => ({ ...p, [key]: v }));

  const missingRequired = FIELDS.some((f) => f.required && !values[f.key].trim());

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    if (missingRequired) {
      toast.error("Please fill in the event name, date(s), venue, link and your email.");
      return;
    }
    // Spam guard: bots fill the hidden field. Look successful, send nothing.
    if (honeypot) {
      setSent(true);
      return;
    }
    if (!supabase || !isSupabaseConfigured) {
      toast.error(`Event form is unavailable right now. Please email ${EMAIL} instead.`);
      return;
    }
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-site-message", {
        body: { type: "event", ...values, company_website: honeypot },
      });
      if (error) throw error;
      if ((data as any)?.error) throw new Error((data as any).error);
      setSent(true);
    } catch (err: any) {
      toast.error(err?.message ?? "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Card className="mt-6 border border-border bg-card">
      <CardContent className="p-5">
        {sent ? (
          <div className="text-center py-4">
            <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="text-lg font-semibold text-foreground">
              Thanks, we'll check it and add it if it fits.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4" noValidate>
            <div>
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-1">
                <CalendarPlus className="w-5 h-5 text-primary" aria-hidden="true" />
                Running an event in Townsville?
              </h3>
              <p className="text-sm text-muted-foreground">
                Send us the details. We check every event before adding it.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FIELDS.map((f) => (
                <div key={f.key} className={f.key === "link" ? "sm:col-span-2" : undefined}>
                  <label htmlFor={`event-${f.key}`} className="text-sm font-medium text-foreground block mb-1">
                    {f.label}
                    {f.required ? (
                      <span aria-hidden="true"> *</span>
                    ) : (
                      <span className="font-normal text-muted-foreground"> (optional)</span>
                    )}
                  </label>
                  <Input
                    id={`event-${f.key}`}
                    type={f.type ?? "text"}
                    value={values[f.key]}
                    onChange={(e) => set(f.key, e.target.value)}
                    maxLength={f.max}
                    required={f.required}
                    placeholder={f.placeholder}
                    className="bg-background"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label htmlFor="event-notes" className="text-sm font-medium text-foreground block mb-1">
                  Anything else <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <Textarea
                  id="event-notes"
                  value={values.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  maxLength={2000}
                  className="min-h-[80px] bg-background"
                />
              </div>
            </div>
            {/* Honeypot: hidden from people, bots fill it in. */}
            <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="event-company">Leave this empty</label>
              <input
                id="event-company"
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>
            <Button type="submit" disabled={sending} className="w-full sm:w-auto">
              {sending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Suggest event
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default SuggestEventForm;
