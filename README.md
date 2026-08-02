# Townsville Guide

Build a one-page React + Tailwind + TypeScript site called “Duncan’s Guide – Townsville.”
Design tone: bright, tropical, welcoming (turquoise + coral accents, soft shadows, rounded cards). Mobile-first, responsive.

Sections & behavior:

Hero (full-height)

Uses my own Townsville background photo (I will upload after generation).

Headline: “Welcome to Townsville 👋”

Subheading: “Your local AI guide to everything in North Queensland.”

Add a visible chat/search box below the text with placeholder:

“Hi! I’m your Townsville guide. Ask me anything — restaurants, beaches, dog parks, events, accommodation.”

Add a subtle scroll indicator at the bottom of the hero.

Quick Access Categories (grid of 6 rounded buttons/cards):

Restaurants • Beaches • Things to Do • Dog Parks • Accommodation • Shopping

Top 5 Local Picks (placeholder list/cards I can edit later)

Map Section

Embedded Google Map centered on Townsville, QLD.

Title: “Find Your Way Around”

About / FAQ (short)

Friendly 2–3 lines about the site being created by a Townsville local.

Contact / Footer

“Questions or suggestions? Email Duncan Ross at greenslopesdirect@gmail.com
.”

Implementation notes:

Create a Hero component (src/components/Hero.tsx) with a background image layer, a light gradient overlay (10–25%), and centered content.

Put the hero background image reference in a variable so I can swap it easily after upload.

Create an assets folder (src/assets/) with a placeholder image named strand-hero.jpg. I will replace it with my photo.

Keep classes semantic (e.g., container, max-w-*, bg-cover bg-center, rounded-3xl, shadow-*).

Leave a clear TODO comment where to replace the hero image.

After generation, I will:

Upload my Townsville hero image into src/assets/ and replace strand-hero.jpg.

(Optional later) embed a real AI agent/script into the chat box.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://townsville-guide-ai.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f97cf9bd-3df6-48af-9628-493b0a309f6d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
