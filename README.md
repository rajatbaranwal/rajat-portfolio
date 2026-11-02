# Rajat Baranwal — Portfolio

Personal portfolio for Rajat Baranwal, Software Engineer (backend, real-time systems, full stack, AI integration).

Live:(https://rajat-portfolio-lime.vercel.app/)

## Stack

React 19 · Vite 6 · framer-motion · react-icons · EmailJS (contact form) · plain CSS with design tokens

## Project structure

```
public/
  Rajat-Baranwal-Resume.pdf   # served at /Rajat-Baranwal-Resume.pdf
  favicon.svg, logo.png       # favicon, Open Graph image
src/
  data/profile.js             # all content: experience, projects, skills, education, credentials, links
  lib/motion.js               # shared animation presets
  components/                 # one component + stylesheet per section / UI primitive
  index.css                   # design tokens and base styles
```

To update content, edit `src/data/profile.js` — components render from it. Keep it consistent with the resume PDF.

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run lint
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Deployment (Vercel)

The site is a static Vite build. On Vercel: framework preset **Vite**, build command `npm run build`, output directory `dist`. Pushing to `main` redeploys if the GitHub repo is connected.

To replace the resume, overwrite `public/Rajat-Baranwal-Resume.pdf` with the same filename.
