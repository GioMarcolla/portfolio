This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
# Giovanni Marcolla — Portfolio

Personal portfolio built with Next.js (App Router) showcasing projects, experience, and bio for Giovanni Marcolla.

**Status:** Production-ready; optimized for Vercel deployment.

**Highlights**
- Clean, responsive layout with a vertical navigation bar.
- Themeable styles (multiple palettes) with `next-themes`.
- Component-driven architecture in `src/Components`.
- Uses `zod` for schema parsing and `zustand` for lightweight state.

## Tech stack
- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS (v4)
- Axios for API requests
- Zod for validation
- Zustand for state management
- Radix UI primitives and Lucide icons

## Project structure (important paths)
- `src/app` — Next App Router layout and pages
- `src/Components` — UI and page components (Navbar, IntroHero, UI primitives)
- `src/Lib` — utilities, parsers, stores
- `public/assets/images` — static assets and OG images
- `next.config.ts` — Next image patterns and config

## Scripts
Install dependencies and run scripts with `bun`.

```bash
# Install
bun install
# Start dev server (Turbopack)
bun run dev
# Build
bun run build
# Start production server
bun run start
# Lint
bun run lint
```

## Environment variables
Create a `.env.local` at the repository root to configure API and runtime options used by `src/Lib/Utils/AxiosUtils.ts`:

```env
# Set to DEV to use local API baseURL
NEXT_PUBLIC_MODE=DEV
# Or point to a remote API when deploying
NEXT_PUBLIC_API_URL=https://example.com
NEXT_PUBLIC_API_KEY=your_api_key
```

## Development notes
- The app uses Turbopack for development via `next dev --turbopack` (fast HMR).
- Image remote patterns are configured in `next.config.ts` for Vercel storage and local images.
- Main layout and metadata live in `src/app/layout.tsx`.

## Deploy
This project is optimized for Vercel. Push to a Vercel-connected repo or deploy via the Vercel dashboard for best results.

## Contributing
Feel free to open issues or pull requests. For local development, run the dev server and edit `src/app/page.tsx` or components under `src/Components`.

---
_Generated/updated README by repository tooling._
