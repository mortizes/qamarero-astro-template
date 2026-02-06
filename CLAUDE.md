# CLAUDE.md - Qamarero Web Astro

> Proyecto: WP Headless + Astro | Deadline: 9 Marzo 2026

---

## Quick Context

**Objetivo:** Migrar web qamarero.com a Astro + WordPress Headless
**KPIs:** PageSpeed 95+, CR Global 0.16% → 0.40%
**Owner:** Miguel Ortiz Peralta
**Estado:** En desarrollo

---

## Tech Stack

| Capa | Tecnologia |
|------|------------|
| Framework | Astro 5.x |
| UI | React 19 + shadcn/ui |
| Styling | Tailwind CSS 4 |
| CMS | WordPress Multisite (Cloudways) |
| API | WPGraphQL |
| Deploy | Vercel |

---

## Arquitectura

```
USUARIOS → qamarero.com (Vercel CDN)
                ↓
         ASTRO (Frontend)
         ├── SSG: Home, Features, Pricing
         └── ISR: Blog posts
                ↓ GraphQL
         WORDPRESS MULTISITE (Cloudways)
         ├── ES: admin.qamarero.com
         ├── FR: admin.qamarero.com/fr
         ├── EN: admin.qamarero.com/en
         └── IT: admin.qamarero.com/it
```

---

## Estructura URLs

| Idioma | URL Publica | URL Admin |
|--------|-------------|-----------|
| ES | qamarero.com | admin.qamarero.com |
| FR | qamarero.com/fr | admin.qamarero.com/fr |
| EN | qamarero.com/en | admin.qamarero.com/en |
| IT | qamarero.com/it | admin.qamarero.com/it |

---

## Estrategia de Contenido

| Tipo | Gestion | Frecuencia | Estrategia |
|------|---------|------------|------------|
| **Blog** | CMS (WordPress) | 1+/dia | ISR on-demand |
| **Corporativo** | Codigo (Astro) | <1x/mes | SSG puro |
| **Legal** | Codigo (Astro) | <1x/trimestre | SSG puro |

---

## Estructura del Proyecto

```
src/
├── pages/
│   ├── index.astro           # ES Home
│   ├── features.astro        # ES Features
│   ├── pricing.astro         # ES Pricing
│   ├── fr/                   # FR pages
│   │   ├── index.astro
│   │   └── ...
│   ├── en/                   # EN pages
│   ├── it/                   # IT pages
│   ├── blog/
│   │   ├── index.astro       # Blog listing (ISR)
│   │   └── [slug].astro      # Blog post (ISR)
│   └── api/
│       └── revalidate.ts     # Webhook endpoint
├── components/
│   ├── layout/               # Header, Footer
│   ├── sections/             # Hero, Features, CTA
│   └── ui/                   # shadcn components
├── lib/
│   └── wordpress.ts          # GraphQL client
└── assets/                   # Static images
```

---

## Comandos

```bash
npm run dev      # Desarrollo local
npm run build    # Build produccion
npm run preview  # Preview build
npm run lint     # ESLint
npm run format   # Prettier
```

---

## Decisiones Arquitectonicas

Ver `/docs/decisiones/DECISIONES-ARQUITECTURA.md` para documento completo.

**Decisiones clave:**
1. **Hibrido:** Blog en CMS + Corporativo hardcodeado
2. **WordPress Multisite:** 1 site por idioma (segregacion)
3. **SSG + ISR:** Corporativo estatico, blog dinamico
4. **Subfolders:** qamarero.com/fr (no subdominios)
5. **shadcn/ui:** Componentes copy-paste

---

## Metricas Target

| Metrica | Actual | Target |
|---------|--------|--------|
| PageSpeed | 76/100 | 95+ |
| Page Load | 6.5s | <0.5s |
| CR Global | 0.16% | 0.40% |
| Bounce Rate | 72.64% | <50% |

---

## Links Importantes

| Recurso | Link |
|---------|------|
| Figma | https://www.figma.com/design/nMxhWN6VjsaMhV1CE8rJWG/Qamarero-Landing |
| shadcn/ui | https://ui.shadcn.com/ |
| shadcnblocks | https://www.shadcnblocks.com/ |
| Asana | https://app.asana.com/0/1212948739058506 |
| Slack | #03-marketing-website-2026 |

---

## Documentacion

| Archivo | Contenido |
|---------|-----------|
| `docs/PROJECT_BRIEF.md` | Resumen ejecutivo |
| `docs/PRD.md` | Requisitos tecnicos |
| `docs/STAKEHOLDERS.md` | Matriz RACI |
| `docs/DECISIONS.md` | ADRs resumidos |
| `docs/ANALYTICS_2025.md` | Metricas actuales |
| `docs/ESTADO_PROYECTO.md` | Estado y fases |
| `docs/DIARIO.md` | Historial cronologico |

---

## Behavioral Rules

### Antes de Codigo

1. **Leer contenido existente** antes de modificar
2. **Seguir estructura de carpetas** establecida
3. **Usar componentes shadcn** existentes

### Al Crear Paginas

1. **ES en raiz** (index.astro), otros idiomas en carpetas
2. **Contenido hardcodeado** para corporativo (no CMS)
3. **ISR** solo para blog (prerender = false)

### Performance

1. **Zero JS por defecto** (Islands Architecture)
2. **Imagenes WebP** con lazy loading
3. **Tailwind** para estilos (no CSS custom)

---

## Fases del Proyecto

| Fase | Fechas | Objetivo |
|------|--------|----------|
| V1 | 27 Ene - 9 Feb | Web migrada funcionando |
| V2 | 10 - 16 Feb | Core Web Vitals verde |
| V3 | 17 - 23 Feb | CR Web→Demo 2% |
| V4 | 24 Feb - 2 Mar | CR Demo→Form 20% |
| V5 | 3 - 7 Mar | CR Global 0.40% |
| V6 | 8 - 9 Mar | Launch + Handoff Lole |

---

## Stakeholders

| Nombre | Rol |
|--------|-----|
| Miguel | Owner (100%) |
| Antonio | CEO/Sponsor |
| Lole | Design (desde 9 marzo) |
| Carlos | Contenido FR |
| Serrano | Design (hasta marzo) |

---

## Contacto

- **Slack:** #03-marketing-website-2026
- **Owner:** @Miguel Ortiz

---

**Ultima actualizacion:** 6 Febrero 2026
