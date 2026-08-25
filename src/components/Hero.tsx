import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Sparkles, Send, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { AI_PRESETS } from "@/utils/aiGuide";
import heroImage from "@/assets/strand-hero.jpg";

const SUGGESTIONS: { label: string; question: string }[] = [
  { label: "What's on this weekend?", question: AI_PRESETS.whatsOn },
  { label: "Best beach today", question: AI_PRESETS.bestBeach },
  { label: "Dinner tonight", question: AI_PRESETS.dinnerSpot },
  { label: "Dog-friendly spots", question: AI_PRESETS.dogFriendly },
];

// Minimal safe markdown → HTML (links, bold, bullets, line breaks)
function renderMarkdown(md: string): string {
  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  let html = escape(md);
  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-yellow-300 underline underline-offset-2 hover:text-yellow-200">$1</a>'
  );
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/(^|\n)[•\-] +(.+)/g, "$1<li>$2</li>");
  html = html.replace(/(<li>[\s\S]+?<\/li>)(?!\s*<li>)/g, "<ul class='list-disc pl-5 space-y-1 my-2'>$1</ul>");
  html = html.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>");
  return html;
}

const Hero = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [displayed, setDisplayed] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Expose setter for aiGuide.ts triggers
  useEffect(() => {
    (window as any).setAiInputValue = (val: string) => setInput(val);
    return () => {
      delete (window as any).setAiInputValue;
    };
  }, []);

  // Typewriter "streaming" reveal
  useEffect(() => {
    if (!answer) {
      setDisplayed("");
      return;
    }
    setDisplayed("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 3;
      setDisplayed(answer.slice(0, i));
      if (i >= answer.length) window.clearInterval(id);
    }, 18);
    return () => window.clearInterval(id);
  }, [answer]);

  const ask = async (question: string) => {
    if (!supabase) {
      toast.error("AI guide is unavailable right now.");
      return;
    }
    const q = question.trim();
    if (!q || loading) return;
    setLoading(true);
    setAnswer("");
    setDisplayed("");
    try {
      const { data, error } = await supabase.functions.invoke("townsville-chat", {
        body: { question: q },
      });
      if (error) throw error;
      if ((data as any)?.error) throw new Error((data as any).error);
      setAnswer((data as any)?.answer ?? "Sorry, I couldn't generate a response.");
    } catch (err: any) {
      const msg = err?.message ?? "Something went wrong";
      if (/429|rate/i.test(msg)) {
        toast.error("Too many requests — please wait a moment and try again.");
      } else if (/402|credit/i.test(msg)) {
        toast.error("AI credits exhausted. Please add credits in workspace settings.");
      } else {
        toast.error("AI guide is unavailable right now.");
      }
      setAnswer("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-[80vh] md:min-h-[88vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Townsville Strand foreshore — wide tropical waterfront view"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/35" />
      </div>

      <div className="container relative z-10 px-4 pt-20 pb-12 text-center mx-auto max-w-3xl">
        <p className="text-sm md:text-base uppercase tracking-[0.25em] text-yellow-300/90 font-semibold mb-4 drop-shadow">
          Townsville Guide
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5 drop-shadow-xl leading-tight tracking-tight">
          Discover the Best of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
            Townsville
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-xl mx-auto font-medium drop-shadow">
          An independent local visitor guide — ask the AI guide, or start with things to do.
        </p>

        {/* AI Chat Box */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-2 shadow-2xl flex items-center gap-2"
        >
          <div className="pl-3 pr-1 text-yellow-300">
            <Sparkles className="w-5 h-5" aria-hidden />
          </div>
          <input
            id="townsville-ai-input"
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              isSupabaseConfigured
                ? "Ask anything about Townsville…"
                : "AI guide is temporarily unavailable"
            }
            aria-label="Ask the Townsville AI guide"
            disabled={loading || !isSupabaseConfigured}
            className="flex-1 bg-transparent text-white placeholder:text-white/70 outline-none px-1 py-3 text-base"
          />
          <Button
            type="submit"
            size="sm"
            disabled={loading || !input.trim() || !isSupabaseConfigured}
            className="rounded-xl h-11 px-4 gap-1.5 shadow-md"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">Ask</span>
          </Button>
        </form>

        {/* Suggestion chips */}
        {isSupabaseConfigured && (
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {SUGGESTIONS.map((s) => (
              <button
                key={s.label}
                type="button"
                onClick={() => {
                  setInput(s.question);
                  ask(s.question);
                }}
                disabled={loading}
                className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm transition disabled:opacity-50"
              >
                {s.label}
              </button>
            ))}
          </div>
        )}

        {/* Streaming response panel */}
        {(loading || displayed) && (
          <div className="mt-6 max-w-2xl mx-auto text-left bg-white/95 text-slate-900 rounded-2xl p-5 shadow-2xl border border-white/40 animate-fade-in">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              Townsville Guide AI
            </div>
            {loading && !displayed ? (
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <Loader2 className="w-4 h-4 animate-spin" />
                Thinking about your Townsville question…
              </div>
            ) : (
              <div
                className="prose prose-sm max-w-none text-slate-800 leading-relaxed [&_a]:!text-orange-600"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(displayed) }}
              />
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto mt-8">
          <Button asChild size="lg" className="rounded-full px-7 h-12 text-base shadow-lg gap-2">
            <Link to="/things-to-do">
              Explore Things to Do
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-7 h-12 text-base bg-white/10 hover:bg-white/20 text-white border-white/40 hover:text-white backdrop-blur-sm gap-2"
          >
            <Link to="/first-time-in-townsville">
              <Compass className="w-4 h-4" />
              First Time in Townsville
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
