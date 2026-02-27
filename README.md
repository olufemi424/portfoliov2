# Personal Portfolio (v2)

A modern personal portfolio built with Next.js App Router, Tailwind CSS, and TypeScript.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- React Icons

## Scripts

```bash
npm run dev    # start local dev server
npm run lint   # run lint checks
npm run build  # production build + static export
npm run start  # start production server (non-export mode)
```

## Getting Started

```bash
git clone https://github.com/olufemi424/portfoliov2.git
cd portfoliov2
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    sections/HeroSection.tsx
    ui/GlassCard.tsx
  assets/
    data.js
  lib/
    utils.ts
```

## Notes

- App uses `output: "export"` for static export workflows.
- Open Graph metadata is defined in `src/app/layout.tsx`.

## Contact

- Email: olufemiaf@gmail.com
- GitHub: https://github.com/olufemi424
- LinkedIn: https://linkedin.com/in/olufemiafolabi91
