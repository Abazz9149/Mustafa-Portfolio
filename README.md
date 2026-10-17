# Mustafa Abbas — Portfolio

Next.js 15 portfolio for a Game & XR Developer. Plain CSS animations, no UI libraries.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, open your `mustafa-abbas-portfolio` project → Settings → Git, and connect the repo
   (or create a new project from it; Vercel detects Next.js automatically).
3. Push to `main` and Vercel builds and deploys.

## Edit content

Everything you'd change lives in `src/data/resume.ts`:

- `profile` — name, intro, email, WhatsApp number and pre-filled message, links
- `projects` — title, summary, bullet points, tags
- `experience`, `skills`, `education`, `certifications`

## WhatsApp

The floating button, hero button and Contact section all open
`https://wa.me/<number>?text=<message>`. Change `whatsapp` (digits only, with country code)
and `whatsappMessage` in `src/data/resume.ts`.

## Project images

Each project shows an original animated illustration from `src/components/art/ProjectArt.tsx`.
To use real screenshots instead, put images in `public/projects/` and replace
`<ProjectArt kind={p.art} />` in `src/app/page.tsx` with a `next/image` `<Image>`.

## Link preview

`public/og-image.png` is the image LinkedIn and WhatsApp show when the link is shared.
