# AGENTS.md

Project: Townsville Guide (townsvilleguide.com.au) — React + Vite SPA with Lovable Cloud.

## Rules

- Weekend event data has exactly one source of truth: `supabase/functions/_shared/thisWeekend.ts`. `src/data/thisWeekend.ts` re-exports it and the `townsville-chat` edge function imports it, so the site's "This weekend in Townsville" box and the AI assistant can never drift apart — editing either copy instead of the shared file re-introduces that split.
- Publishing the site does not deploy edge functions. When `supabase/functions/**` changes need to go live, deploy the function explicitly (e.g. `townsville-chat`); otherwise the published site keeps running the previous version.
- The production `build` script (`vite build && vite build --ssr src/entry-server.tsx && node scripts/prerender.mjs`) must stay browser-free: Lovable's build container cannot reliably run Puppeteer/Chromium, and per-route prerendering is what gives each page its own title/meta/canonical in raw HTML.
