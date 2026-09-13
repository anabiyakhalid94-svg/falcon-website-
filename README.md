# Falcon Academic Consultancy

React + Vite + React Router website recreated from the supplied corporate/Webflow reference and cinematic globe hero image. The design keeps the reference's dark editorial hierarchy, gold accent, large serif typography, cards, spacing and motion while using original Falcon content and structure.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Optional preview:

```bash
npm run preview
```

## Pages

- `/` — Home
- `/about` — About
- `/services` — Services + destinations
- `/work` — Our Work / journey examples
- `/contact` — Contact + validated enquiry form

## Vercel

Import this repository into Vercel. Build command: `npm run build`. Vercel will serve the Vite output and `vercel.json` rewrites SPA routes to `index.html`.

## Before launch

Replace the placeholder phone/WhatsApp number, email and office address with Falcon's official details. The hero uses the supplied cinematic globe image through the provided Postimg URL; replace it with a locally hosted/licensed asset if desired.

The contact form is frontend-only: it validates fields and displays a success state but does not send submissions. Connect it to Falcon's email, WhatsApp, CRM or preferred form backend before production launch.
