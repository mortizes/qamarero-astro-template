# Qamarero Web - Astro

Marketing website for [Qamarero](https://qamarero.com), built with Astro 5, React 18, and Tailwind CSS 4.

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Astro | 5.17.x (stable) |
| UI | React + shadcn/ui | 18.3.x |
| Styling | Tailwind CSS | 4.1.x |
| Content | MDX + Content Collections | - |
| Deploy | Vercel | Static |

## Features

- Zero JavaScript by default (Islands Architecture)
- Content Collections with Zod schemas
- RSS feed at `/rss.xml`
- Sitemap at `/sitemap-index.xml`
- Theme toggle (dark/light mode)
- SEO optimized (meta tags, Open Graph, Twitter Cards)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```text
src/
├── components/
│   ├── sections/      # Page sections (Hero, Features, etc.)
│   ├── ui/            # shadcn/ui components
│   └── elements/      # Reusable elements
├── content/
│   ├── blog/          # MDX blog posts
│   └── config.ts      # Content Collections schema
├── layouts/           # Page layouts
├── pages/             # Routes
│   ├── blog/          # Blog listing and posts
│   └── rss.xml.js     # RSS feed
└── styles/            # Global styles
```

## Content Collections

Blog posts use Astro 5 Content Collections format:

```typescript
// src/content/config.ts
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    // ...
  }),
});
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## URLs

| Environment | URL |
|-------------|-----|
| Production | https://astro-template-kappa.vercel.app |
| GitHub | https://github.com/mortizes/qamarero-astro-template |

## License

MIT
