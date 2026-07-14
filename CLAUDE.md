# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Next.js version warning

This project pins `next@16.2.10`, a version newer than your training data — App Router APIs and conventions may have changed. Before writing or editing any Next.js code, check `node_modules/next/dist/docs/` (bundled docs for the installed version, covering `01-app`, `02-pages`, `03-architecture`, `04-community`) rather than relying on prior knowledge, and follow any deprecation notices found there.

## Commands

This repo uses Yarn (`yarn.lock` is the lockfile, no `package-lock.json`).

- `yarn dev` — start the dev server (http://localhost:3000)
- `yarn build` — production build
- `yarn start` — serve the production build
- `yarn lint` — run ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next`'s core-web-vitals and typescript rules)

There is no test setup in this repository.

## Architecture

This is a minimal Next.js App Router project, close to the `create-next-app` scaffold:

- `app/layout.tsx` — root layout; loads the Geist Sans/Mono fonts via `next/font/google` and exposes them as CSS custom properties (`--font-geist-sans`, `--font-geist-mono`) on `<html>`.
- `app/page.tsx` — the `/` route.
- `app/globals.css` — global styles only: CSS custom properties for `--background`/`--foreground` (light/dark via `prefers-color-scheme`), and base element rules for `html`/`body`/`a`. No CSS framework.
- Path alias `@/*` maps to the repo root (see `tsconfig.json`).

### Styling: CSS Modules

This project styles components with **CSS Modules**, not Tailwind (Tailwind was removed — no `tailwind.config`, no `@tailwindcss/postcss`, no utility classes). Conventions:

- Co-locate a `*.module.css` file next to the component/route it styles (e.g. a `page.module.css` next to `page.tsx`), import it as `import styles from "./page.module.css"`, and apply classes via `styles.someClass`.
- Cross-cutting values (colors, fonts) live as CSS custom properties in `app/globals.css` (`var(--background)`, `var(--foreground)`, `var(--font-geist-sans)`, `var(--font-geist-mono)`) and get referenced from module files rather than redefined.
- Dark mode is handled per-module with `@media (prefers-color-scheme: dark) { ... }` blocks — there is no `dark:` variant system.
