---
name: astro-fullstack
description: Complete fullstack development skill for Astro + TypeScript + Tailwind + Supabase + Vercel. v2.1 with 16 references + cursor rules. Islands architecture, Content Collections, View Transitions, YAML catalogs, one-page patterns. DEFAULT is PUBLIC content sites (full SEO, sitemap, 98+ Lighthouse). Triggers on "build astro", "create astro", "astro project", "astro site", "content site", "blog", "documentation site", "marketing site", "landing page astro", "static site", "islands architecture", "catalogo", "catalog", "one-page", "productos".
---

# Astro Fullstack Development

> **v2.1** | **16 referencias** | Islands Architecture | Content Collections | View Transitions | YAML Catalogs | One-Page Pattern | 98+ Lighthouse (Feb 2026)

Production-ready content-driven websites with Astro, TypeScript, Tailwind CSS, Supabase, and Vercel deployment.

## AUDIT OBLIGATORIO ANTES DE COMPLETAR

**SIEMPRE ejecutar este checklist antes de considerar trabajo completo:**

- [ ] **Componentes sin hooks → .astro** (0 JS, no client directive)
- [ ] **Client directives correctos:**
  - `client:load` → SOLO above-fold crítico (navbar)
  - `client:visible` → below-fold interactivo (carousels, faq)
  - `client:idle` → no-crítico (banners, newsletter)
  - ninguno → contenido estático
- [ ] **View Transitions** (`ClientRouter` en layout)
- [ ] **Image optimization** (`<Image />` component, `fetchpriority="high"` en hero)
- [ ] **Limpiar puertos** antes de dev/preview (solo 1 servidor en 4321)
- [ ] **Build exitoso** (`npm run build`)

> **Learned 2026-02-06:** No completar proyecto Astro sin auditar Islands Architecture.
> **Learned 2026-02-07:** Content Collections con `type: "data"` + YAML para catálogos/productos (no MDX).
> **Learned 2026-02-07:** Siempre `lang="es"` para sitios en español.

---

## Islands Architecture (CRÍTICO)

**Astro envía ZERO JS por defecto.** Solo añadir donde sea necesario.

### Client Directives

| Directive | JS Enviado | Cuándo Usar |
|-----------|------------|-------------|
| (ninguno) | 0 KB | Contenido estático |
| `client:visible` | Al ver | Below-fold interactivo |
| `client:idle` | En idle | No crítico (ThemeToggle) |
| `client:load` | Inmediato | SOLO above-fold crítico |

### Árbol de Decisión

```
¿Es interactivo?
├── NO → Usar .astro (0 JS) ✅
└── SÍ → ¿Usuario lo necesita inmediatamente?
    ├── SÍ → ¿Está above-fold?
    │   ├── SÍ → client:load
    │   └── NO → client:visible
    └── NO → client:idle
```

---

## Content Collections con YAML

Para catálogos/productos, usar `type: "data"`:

```typescript
// src/content/config.ts
import { defineCollection, z } from "astro:content";

const productoSchema = z.object({
  id: z.string(),
  nombre: z.string(),
  precio: z.number(),
  badge: z.string().optional(),
  destacados: z.array(z.string()).optional(),
  imagen: z.string().optional(),
});

const productos = defineCollection({
  type: "data",  // ← YAML/JSON, no MDX
  schema: z.array(productoSchema),
});

export const collections = { productos };
```

```yaml
# src/content/productos/packs.yaml
- id: pack-esencial
  nombre: Pack Esencial
  precio: 470
  badge: Popular
  destacados:
    - TPV incluido
    - Software preinstalado
```

---

## View Transitions

```astro
---
// src/layouts/Layout.astro
import { ClientRouter } from 'astro:transitions';
---

<html lang="es">
  <head>
    <ClientRouter />
  </head>
  <body>
    <slot />
  </body>
</html>
```

---

## One-Page Pattern

```
src/
├── components/
│   ├── BaseHead.astro
│   └── catalogo/         # Componentes (.astro)
├── content/
│   ├── config.ts         # Schema Zod
│   └── productos/        # YAML files
├── layouts/
│   └── Layout.astro      # Layout único
├── pages/
│   └── index.astro       # ONE-PAGE
└── consts.ts             # Metadata
public/
├── favicon.svg
└── logo.svg
```

---

## Rules Summary

### ✅ SIEMPRE

- Zero JS por defecto
- `client:visible` para below-fold interactivo
- Content Collections para datos
- `<Image />` para imágenes
- TypeScript estricto
- `lang="es"` en HTML

### ❌ NUNCA

- `client:load` en componentes estáticos
- Crear React para contenido estático
- Olvidar `npm run build` antes de PR
