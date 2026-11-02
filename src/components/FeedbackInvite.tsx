import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Loader2, MessageSquare, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EMAIL = "greenslopesdirect@gmail.com";

/**
 * The site's visitor feedback feature. Shown near the end of every guide page (see TownsvilleLayout)
 * and on the homepage. Emails the message via the submit-site-message function.
 */
const FeedbackInvite = ({ className }: { className?: string }) => {
  const { pathname } = useLocation();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim().length < 2 || sending) return;
    // Spam guard: bots fill the hidden field. Look successful, send nothing.
    if (honeypot) {
      setSent(true);
      return;
    }
    if (!supabase || !isSupabaseConfigured) {
      toast.error(`Feedback form is unavailable right now. Please email ${EMAIL} instead.`);
      return;
    }
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-site-message", {
        body: { type: "feedback", message, email, page: pathname, company_website: honeypot },
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
    <Card className={`border-2 border-primary/20 bg-primary/5 ${className ?? ""}`}>
      <CardContent className="p-6">
        {sent ? (
          <div className="text-center py-4">
            <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="text-lg font-semibold text-foreground">Thanks — we read every message.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4" noValidate>
            <div>
              <h2 className="text-xl font-semibold text-foreground flex items-center gap-2 mb-1">
                <MessageSquare className="w-5 h-5 text-primary" aria-hidden="true" />
                What should we add next?
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tell us what you'd like to see on Townsville Guide: a place, an event, a question you
                couldn't find answered, or a feature.
              </p>
            </div>
            <div>
              <label htmlFor="feedback-message" className="sr-only">
                What you'd like to see
              </label>
              <Textarea
                id="feedback-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={2000}
                required
                placeholder="What would you like to see?"
                className="min-h-[96px] bg-background"
              />
            </div>
            <div>
              <label htmlFor="feedback-email" className="text-sm font-medium text-foreground block mb-1">
                Email <span className="font-normal text-muted-foreground">(optional)</span>
              </label>
              <Input
                id="feedback-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                placeholder="you@example.com"
                className="bg-background"
              />
              <p className="text-xs text-muted-foreground mt-1">Only if you'd like a reply</p>
            </div>
            {/* Honeypot: hidden from people, bots fill it in. */}
            <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="feedback-company">Leave this empty</label>
              <input
                id="feedback-company"
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>
            <Button type="submit" disabled={sending || message.trim().length < 2} className="w-full sm:w-auto">
              {sending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default FeedbackInvite;
