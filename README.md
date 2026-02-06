# Qamarero Web - Astro

Marketing website for [Qamarero](https://qamarero.com), built with Astro 5, React 19, and Tailwind CSS 4.

## Tech Stack

- **Framework:** Astro 5.x (SSG)
- **UI:** React 19 + shadcn/ui
- **Styling:** Tailwind CSS 4
- **Deploy:** Vercel

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
│   ├── sections/    # Page sections (Hero, Features, etc.)
│   ├── ui/          # shadcn/ui components
│   └── elements/    # Reusable elements
├── content/         # MDX content (blog, legal)
├── layouts/         # Page layouts
├── pages/           # Routes
└── styles/          # Global styles
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## License

MIT
