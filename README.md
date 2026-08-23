# Townsville Guide

**[townsvilleguide.com.au](https://www.townsvilleguide.com.au)** — an independent, locally written travel and lifestyle guide to Townsville and North Queensland, with a free AI concierge built in.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&labelColor=20232a)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white&labelColor=20232a)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&labelColor=20232a)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white&labelColor=20232a)
![Supabase](https://img.shields.io/badge/Supabase-Edge_Functions-3ECF8E?logo=supabase&logoColor=white&labelColor=20232a)

![Townsville Guide preview](public/og-image.jpg)

## What this is

Townsville Guide is a real, actively maintained visitor and local-resident guide for Townsville, QLD — not a tourism-board reprint. It covers beaches, day trips (Magnetic Island, Paluma Range), food, accommodation, events, dog-friendly spots, accessibility, and practical info for people moving to the city, written from a single local's actual experience.

Built on top of the guide content is a working **AI travel concierge**: a chat box on the homepage that answers free-text questions ("best beach today," "dog-friendly spots," "what's on this weekend") using a Supabase Edge Function backed by Gemini 2.5 Flash, grounded in the site's own local knowledge rather than generic web search.

## Why it's built the way it is

This is a client-rendered React SPA, which normally fights search visibility — so the project ships its own fix for that instead of reaching for a heavier framework:

- **Static prerendering.** `scripts/prerender.mjs` drives headless Chrome (Puppeteer) across every route at build time and writes real static HTML, so search engines and AI crawlers see fully rendered content, not an empty `<div id="root">`.
- **SEO verification as a build step.** `scripts/verify-seo.mjs` asserts titles, meta descriptions, canonicals and schema across every route in the sitemap, so a broken prerender fails loudly instead of silently shipping blank pages.
- **AI-crawler access, deliberately.** [`robots.txt`](public/robots.txt) explicitly allows GPTBot, ClaudeBot, PerplexityBot and friends, and [`llms.txt`](public/llms.txt) gives LLM-based answer engines a structured index of every page — this guide is built to be a good source for AI-generated travel answers, not just Google.
- **Per-route SEO ownership.** Every page drives its own title, description, canonical URL, Open Graph/Twitter tags and `robots` directive through a single [`SEOHead`](src/components/SEOHead.tsx) component, backed by `Organization` and `SoftwareApplication` JSON-LD at the document level.

## Tech stack

- **Framework:** React 18 + TypeScript, built with Vite (SWC), route-level code-splitting via `React.lazy` across 50+ routes
- **UI:** Tailwind CSS + shadcn/ui (Radix primitives)
- **Data/AI:** Supabase (Edge Functions + client SDK), TanStack Query
- **Forms/validation:** React Hook Form + Zod
- **SEO tooling:** react-helmet, Puppeteer-driven prerendering, a custom sitemap generator run on every build

## Local development

```sh
git clone https://github.com/greenslopesdirect-commits/townsville-guide-ai.git
cd townsville-guide-ai
npm install
npm run dev
```

Other scripts:

```sh
npm run build      # sitemap generation + production build
npm run lint        # ESLint
npm run sitemap      # regenerate public/sitemap.xml on demand
node scripts/prerender.mjs     # static-HTML snapshot of every route
node scripts/verify-seo.mjs    # assert SEO tags across the full sitemap
```

## About

Built and maintained by Duncan Ross, a Townsville local. Questions, feedback or advertising enquiries: see [/contact](https://www.townsvilleguide.com.au/contact).
