# AGENTS.md – Fermi's Page (JFGC-personal-page)

Personal academic site for José Fermi Guerrero Castellanos. Next.js 14 App Router + Sanity CMS + Tailwind + shadcn/ui, deployed to Cloudflare Pages/Workers via `@cloudflare/next-on-pages`.

## Stack

- Node `20` (see `.nvmrc`), npm `>=10` (`packageManager: npm@11.6.1`), engines: `node>=20.17.0`
- Next.js `14.2.35` (App Router, `jsx: preserve`, RSC), React 18, TypeScript 5 (`strict`, `noEmit`, path `@/*` → `./src/*`)
- Sanity `^3.46.1` + `next-sanity ^9.3.10` (Studio mounted at `/studio`, presentation + vision tools)
- Styling: Tailwind `^3.3.0` + `tailwindcss-animate`, shadcn/ui (`style: default`, `baseColor: stone`, `cssVariables: true`), `next-themes`, `framer-motion`
- Forms/validation: `react-hook-form` + `@hookform/resolvers` + `zod`, email via `resend`
- Citations: `citation-js`, `@citation-js/*`, `bibtex-js-parser`, `citeproc` + local `citetuto.js`, `lib.bib`, `lib2.bib`
- Cloudflare: `@cloudflare/next-on-pages 1.13.15`, `wrangler ^3.34.2`, `compatibility_flags = ["nodejs_compat"]`

## Commands

```bash
npm install
npm run dev    # next dev + setupDevPlatform (persist:true in next.config.mjs)
npm run build  # next build
npm start      # next start
npm run lint   # next lint
npx wrangler pages deploy / deploy via Cloudflare next-on-pages (see wrangler.toml: fermi-page-app)
```

No tests, no format script. Lint with eslint-config-next + prettier.

## Structure

- `src/app/layout.tsx`: root layout (Montserrat, ThemeProvider dark default, Navbar/Footer with Sanity `HOME_QUERY_LIGHT`, Toaster, VisualEditing in draftMode)
- `src/app/(home)/page.tsx` + `_components/`: landing
- `src/app/(pages)/`: `biography, research, teaching, students, lab, gallery, contact, bibtext` – each `page.tsx` + `loading.tsx` + `_components/` (colocated)
- `src/app/(test)/post/`: experimental
- `src/app/api/draft|disable-draft/route.ts`: Sanity draft mode; `src/app/studio/[[...tool]]/page.tsx`: Studio
- `src/components/` (+ `ui/` shadcn primitives), `src/actions/`, `src/lib/`, `src/providers/theme-provider.tsx`, `src/utils/`
- `sanity/`: `schema.ts`, `schemaTypes/`, `env.ts` (projectId/dataset/apiVersion), `lib/queries.ts`, `lib/fetch.ts`, `lib/image.ts`
- Root data: `dataPage.ts` (static lab/teaching/students content), `theme.ts` (Sanity studio theme), `citetuto.js`
- `public/images/`, `src/app/globals.css`, `sitemap.ts`, `robots.ts`

## Conventions

- TypeScript strict, RSC by default; add `'use client'` only for interactive components (see `sanity.config.ts`).
- Imports: use `@/` alias. Keep route-colocated components in `_components/` (underscore = not a route).
- Styling: Tailwind with `important: true`, CSS vars (stone base), `cn()` from `@/lib/utils` (`clsx` + `tailwind-merge`). Dark/light via `class` (`next-themes`). Animations: `tailwindcss-animate` + `framer-motion`. Icons: `lucide-react`, `react-icons`.
- shadcn: config in `components.json`; UI primitives in `src/components/ui/`, Radix-based. Follow existing variant patterns (`class-variance-authority`).
- Prettier: `{ semi:false, singleQuote:true }`; ESLint: `next/core-web-vitals` + `prettier`, `next/next/no-img-element: off`, `react/no-unescaped-entities: off`.
- Sanity: GROQ queries in `sanity/lib/queries.ts`, fetch via `sanityFetch`, images via `@sanity/image-url`. `basePath: '/studio'`. Don't hardcode projectId/dataset – use `sanity/env.ts`.
- Images: `next/image` with `remotePatterns`: `source.unsplash.com`, `www.fguerrero.ece.buap.mx`, `cdn.sanity.io (https)`.
- Env: `.env` is gitignored (see `.gitignore`); required Sanity + Resend keys loaded via `sanity/env.ts` and server actions. Never commit secrets.
- Metadata/SEO: defined per-layout in `layout.tsx` (`metadataBase: https://fermiguerrero.com/`).

## Notes for agents

- Prefer editing existing files over creating new ones. Match App Router patterns (`page.tsx`, `loading.tsx`).
- After changes run `npm run lint` and `npm run build` to verify. Check `tsconfig.json` paths when adding imports.
- Cloudflare edge: avoid Node-only APIs in routes/middleware unless `nodejs_compat` covers it; test with `npm run dev`.
