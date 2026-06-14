# gitbagIsland

An Animal Crossing-inspired personal blog built with Astro 6 and Tailwind CSS 4.

## Stack

- Astro `^6` with `experimental.rustCompiler`
- Tailwind CSS `^4` through `@tailwindcss/vite`
- `animal-island-ui` styling reference and assets
- Static output only
- Markdown content collections

## Requirements

- Node.js `>=22.12.0`
- pnpm `>=10`

If you use `nvm`:

```bash
nvm use 22
```

## Development

```bash
pnpm install
pnpm dev
```

Build the static site:

```bash
pnpm build
```

Preview the build:

```bash
pnpm preview
```

Deploy to Cloudflare Pages:

```bash
pnpm deploy
```

The deploy command builds the static site and publishes `dist/` to the
Cloudflare Pages project `gitbaghero`. Run `pnpm exec wrangler login` first if
this machine is not already authenticated with Cloudflare.

## Writing Posts

Blog posts live in `src/content/posts` as Markdown files. The filename becomes the static route:

```text
src/content/posts/hello-island.md -> /posts/hello-island/
```

Required frontmatter:

```md
---
title: "Post title"
summary: "Short summary shown in the sidebar and home page."
pubDate: 2026-06-13
tags: ["Astro", "Blog"]
draft: false
---
```

Tags are collected at build time and displayed in the sidebar and home page.

## Project Structure

```text
src/
  components/        React islands, including the theme toggle
  content/posts/     Markdown blog posts
  layouts/           Shared Astro layouts
  lib/               Blog data helpers
  pages/             Static routes
  styles/            Global Animal Island theme CSS
public/
  cursor-icon.png    Animal Island cursor asset
```

## Notes

- Navigation uses Astro's `<ClientRouter />` for client-side page transitions.
- The theme toggle is client-only to avoid SSR/localStorage hydration mismatches.
- The site is deployed to Cloudflare Pages from the static `dist/` output.
