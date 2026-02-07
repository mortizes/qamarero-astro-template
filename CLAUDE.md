# CLAUDE.md - Qamarero Web Astro

> Proyecto: WP Headless + Astro | Deadline: 9 Marzo 2026

---

## Project Rules (CRITICAL)

### Merge Policy

- **MERGE AUTOMATICO**: No preguntar "quieres que haga merge?" - hacerlo directo
- Single owner project, no requiere aprobacion

### Pre-PR Checklist (MANDATORY)

Antes de crear CUALQUIER PR, verificar:

1. `npm run build` - debe pasar sin errores
2. `npm run dev` - probar rutas en localhost
3. Verificar enlaces funcionan (no `/undefined`, no `.mdx` en URLs)
4. Probar funcionalidad afectada por los cambios

---

## Quick Context

**Objetivo:** Migrar web qamarero.com a Astro + WordPress Headless
**KPIs:** PageSpeed 95+, CR Global 0.16% -> 0.40%
**Owner:** Miguel Ortiz Peralta
**Estado:** En desarrollo

---

## Tech Stack

| Capa | Tecnologia | Version |
|------|------------|---------|
| Framework | Astro | 5.17.x (stable) |
| UI | React + shadcn/ui | 18.3.x |
| Styling | Tailwind CSS | 4.1.x |
| Content | MDX + Content Collections | - |
| CMS | WordPress Multisite | Cloudways |
| API | WPGraphQL | - |
| Deploy | Vercel | Static |

---

## Arquitectura

```text
USUARIOS -> qamarero.com (Vercel CDN)
                |
         ASTRO (Frontend)
         |-- SSG: Home, Features, Pricing
         |-- ISR: Blog posts
                | GraphQL
         WORDPRESS MULTISITE (Cloudways)
         |-- ES: admin.qamarero.com
         |-- FR: admin.qamarero.com/fr
         |-- EN: admin.qamarero.com/en
         |-- IT: admin.qamarero.com/it
```

---

## Content Collections (Astro 5)

Formato estable de Astro 5 con `type: "content"`:

```typescript
// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
  }),
});

export const collections = { blog };
```

### Uso en paginas

```typescript
// Obtener posts
const posts = await getCollection("blog");

// Usar slug directamente (Astro 5)
posts.map(post => ({
  slug: post.slug,  // NO usar post.id
  title: post.data.title,
}));

// Renderizar contenido
const { Content } = await post.render();
```

---

## Features Implementadas

| Feature | Estado | Archivo |
|---------|--------|---------|
| RSS Feed | OK | `/rss.xml` |
| Sitemap | OK | `/sitemap-index.xml` |
| Theme Toggle | OK | Inline script |
| Blog | OK | Content Collections |
| SEO | OK | Meta tags, OG, Twitter |

---

## URLs

| Recurso | Link |
|---------|------|
| GitHub | <https://github.com/mortizes/qamarero-astro-template> |
| Vercel | <https://astro-template-kappa.vercel.app> |

---

## Comandos

```bash
npm run dev      # Desarrollo local (localhost:4321)
npm run build    # Build produccion
npm run preview  # Preview build
npm run lint     # ESLint
npm run format   # Prettier
```

---

## Notas de Version

### Astro 5.x (Stable) - Actual

- Content Collections con `type: "content"`
- Config en `src/content/config.ts`
- `post.slug` disponible directamente
- RSS y Sitemap funcionando
- React 18.3.x para compatibilidad

### Por que React 18 (no 19)

React 19 causa "Invalid hook call" en dev mode con Astro. React 18.3.x es estable y compatible.

---

## Links Importantes

| Recurso | Link |
|---------|------|
| Figma | <https://www.figma.com/design/nMxhWN6VjsaMhV1CE8rJWG/Qamarero-Landing> |
| shadcn/ui | <https://ui.shadcn.com/> |
| Asana | <https://app.asana.com/0/1212948739058506> |

---

## Stakeholders

| Nombre | Rol |
|--------|-----|
| Miguel | Owner (100%) |
| Antonio | CEO/Sponsor |
| Lole | Design (desde 9 marzo) |

---

## Skills de Claude Code

Este proyecto incluye skills en `.claude/skills/`:

| Skill | Qué hace |
|-------|----------|
| `astro-fullstack` | Guía completa de Astro, Islands Architecture, Content Collections |
| `qamarero-style-guide` | Colores, tipografía y estilos de marca Qamarero |

---

## Arquitectura (Islands Architecture)

**Regla CRÍTICA:** Componentes sin hooks → `.astro` (0 JS)

### Client Directives

| Directive | Uso |
|-----------|-----|
| ninguno | Contenido estático (90% de componentes) |
| `client:idle` | No crítico (ThemeToggle) |
| `client:visible` | Below-fold interactivo |
| `client:load` | EVITAR - solo si absolutamente necesario |

### Pre-PR Checklist (Islands)

- [ ] Componentes sin useState/useEffect → `.astro`
- [ ] NO usar `client:load` excepto si crítico
- [ ] View Transitions habilitadas (`ClientRouter`)
- [ ] `lang="es"` en HTML
- [ ] `npm run build` pasa

---

## Branding Qamarero

### Logo

```astro
<img
  src="/qamarero-logo.svg"
  alt="Qamarero"
  class="h-8 w-auto dark:invert"
/>
```

### Favicon

Ya configurado en `public/favicon.svg` y `src/consts.ts`.

---

## Aprendizajes (LEARNED)

### Patterns to Follow

- Auditar Islands Architecture ANTES de completar trabajo
- Componentes sin useState/useEffect → siempre `.astro`
- `client:idle` para ThemeToggle (no es crítico)
- View Transitions para navegación fluida
- Content Collections con `type: "data"` + YAML para datos (catálogos, productos)
- Logo con `dark:invert` para soporte dark mode
- Siempre `lang="es"` para sitios en español

### Patterns to Avoid

- NO usar `client:load` en componentes que pueden ser Astro puro
- NO dejar `lang="en"` en sitios en español
- NO olvidar `npm run build` antes de PR
- NO crear componentes React para contenido estático
