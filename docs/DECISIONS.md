# WP Headless + Astro - Decisiones (ADRs)

**Version:** 2.0
**Fecha:** 3 Febrero 2026
**Estado:** Documentacion completa - 12 documentos de decision detallados

---

## Documentos de Decision Detallados

Para cada decision importante se ha creado un documento detallado con opciones, pros/contras, codigo de ejemplo y tests de validacion:

| # | Documento | Pregunta | Decision |
|---|-----------|----------|----------|
| 1.1 | [CMS-vs-Hardcoded.md](./decisiones/1.1-CMS-vs-Hardcoded.md) | ¿CMS o hardcodeado? | Hibrido |
| 1.2 | [Que-CMS-Usar.md](./decisiones/1.2-Que-CMS-Usar.md) | ¿Que CMS? | WordPress |
| 1.3 | [WordPress-Multisite.md](./decisiones/1.3-WordPress-Multisite.md) | ¿Single o Multisite? | Multisite |
| 3.1 | [Framework-Frontend.md](./decisiones/3.1-Framework-Frontend.md) | ¿Que framework? | Astro |
| 3.2 | [Estrategia-Rendering.md](./decisiones/3.2-Estrategia-Rendering.md) | ¿SSG/SSR/ISR? | SSG + ISR |
| 3.4 | [Gestion-Imagenes.md](./decisiones/3.4-Gestion-Imagenes.md) | ¿Como imagenes? | Astro nativo → Cloudflare |
| 3.5 | [Gestion-Videos.md](./decisiones/3.5-Gestion-Videos.md) | ¿Como videos? | Wistia |
| 4.2 | [Multi-idioma-Codigo.md](./decisiones/4.2-Multi-idioma-Codigo.md) | ¿Como i18n en codigo? | Archivos separados |
| 4.3 | [Segregacion-Permisos.md](./decisiones/4.3-Segregacion-Permisos.md) | ¿Como permisos? | WP Multisite + CODEOWNERS |
| 5.1 | [Integracion-WP-Astro.md](./decisiones/5.1-Integracion-WP-Astro.md) | ¿Como integrar WP? | WPGraphQL + fetch |
| 5.2 | [Sincronizacion-Cambios.md](./decisiones/5.2-Sincronizacion-Cambios.md) | ¿Como sincronizar? | Webhook + ISR on-demand |

**Documento maestro:** [DECISIONES-ARQUITECTURA.md](./decisiones/DECISIONES-ARQUITECTURA.md)

---

## ADRs Resumidos (Historial)

### ADR-001: Arquitectura WordPress Headless + Astro

| Campo | Valor |
|-------|-------|
| **Fecha** | 8 Enero 2026 |
| **Contexto** | Web actual lenta, vulnerable, dificil de escalar |
| **Opciones** | 1) Optimizar WP actual 2) Next.js + CMS 3) Astro + WP Headless |
| **Decision** | Astro + WordPress Headless |
| **Razon** | Mejor performance, seguridad, productividad. WP conocido por equipo. |
| **Decisor** | Miguel (propuesta), Antonio (aprobacion) |

### ADR-002: WordPress Multisite para Multiidioma

| Campo | Valor |
|-------|-------|
| **Fecha** | 8 Enero 2026 |
| **Contexto** | Necesidad de ES, EN, FR, IT independientes |
| **Opciones** | 1) WPML 2) Polylang 3) Multisite |
| **Decision** | WordPress Multisite |
| **Razon** | Independencia total por mercado, SEO especifico, sin plugins de traduccion |
| **Decisor** | Miguel |

### ADR-003: Tema Sequence como Base

| Campo | Valor |
|-------|-------|
| **Fecha** | 8 Enero 2026 |
| **Contexto** | Necesidad de punto de partida profesional |
| **Opciones** | 1) Desde cero 2) Tema gratuito 3) Sequence |
| **Decision** | Sequence Theme / shadcnblocks |
| **Razon** | Componentes de calidad, React + Tailwind, personalizable 100% |
| **Decisor** | Miguel |

### ADR-004: Deploy en Vercel

| Campo | Valor |
|-------|-------|
| **Fecha** | 8 Enero 2026 |
| **Contexto** | Necesidad de hosting frontend rapido |
| **Opciones** | 1) Cloudflare Pages 2) Netlify 3) Vercel |
| **Decision** | Vercel |
| **Razon** | Mejor integracion con Astro, CDN global, deploy automatico, preview branches |
| **Decisor** | Miguel, Javi Guardado (recomendacion) |

### ADR-005: WordPress Permanece en Cloudways

| Campo | Valor |
|-------|-------|
| **Fecha** | 8 Enero 2026 |
| **Contexto** | Backend necesita hosting confiable |
| **Opciones** | 1) Migrar a otro 2) Mantener Cloudways |
| **Decision** | Mantener Cloudways |
| **Razon** | Ya configurado, funciona bien, conocemos la plataforma |
| **Decisor** | Miguel |

### ADR-009: Estrategia URLs - Subfolders

| Campo | Valor |
|-------|-------|
| **Fecha** | 31 Enero 2026 |
| **Contexto** | Definir estructura de URLs para multi-idioma |
| **Opciones** | 1) Subdominios (fr.qamarero.com) 2) Subfolders (qamarero.com/fr) |
| **Decision** | Subfolders (subdirectorios) |
| **Razon** | SEO: Google prefiere subfolders, consolida autoridad de dominio |
| **Estructura** | ES: qamarero.com (raiz) / FR: qamarero.com/fr / EN: qamarero.com/en / IT: qamarero.com/it |
| **Validacion** | Lole (Cabify): "100% con los subdirectorios, en Cabi nos dan muchas alegrias" |

### ADR-010: Componentes shadcn/ui

| Campo | Valor |
|-------|-------|
| **Fecha** | 28 Enero 2026 |
| **Contexto** | Necesidad de libreria de componentes para React |
| **Opciones** | 1) Diseno custom desde cero 2) Material UI 3) shadcn/ui |
| **Decision** | shadcn/ui |
| **Razon** | Copy-paste (sin dependencias npm), control total, accesibilidad incluida |
| **Link** | https://www.shadcn.io/ |

### ADR-013: Estrategia de Rendering Hibrida (SSG + ISR)

| Campo | Valor |
|-------|-------|
| **Fecha** | 3 Febrero 2026 |
| **Contexto** | Definir estrategia de rendering para diferentes tipos de contenido |
| **Decision** | **Hibrido: SSG para paginas estaticas + ISR para blog** |
| **Razon** | SSG da maximo rendimiento para paginas que casi nunca cambian. ISR permite publicacion frecuente sin rebuilds. |

**Arquitectura de rendering por tipo de pagina:**

| Tipo de pagina | Estrategia | Frecuencia cambio | TTFB esperado |
|----------------|------------|-------------------|---------------|
| Home, Features, Pricing | SSG | <1x/mes | ~0ms |
| About, Legal | SSG | Casi nunca | ~0ms |
| Casos de exito | SSG | 1x/semana | ~0ms |
| Blog (listado + detalle) | ISR on-demand | 1+/dia | ~0ms (cached) |

### ADR-015: WordPress como CMS (vs Tina)

| Campo | Valor |
|-------|-------|
| **Fecha** | 3 Febrero 2026 |
| **Contexto** | Elegir CMS para arquitectura headless con publicacion frecuente (1+ posts/dia) |
| **Opciones** | 1) WordPress Headless 2) Tina (Git-based) |
| **Decision** | **WordPress Headless** |
| **Razon** | Con publicacion frecuente, Tina requiere rebuild por cada cambio. WordPress + ISR permite publicar en <1 min sin rebuilds. |

### ADR-016: Estrategia Hibrida para Imagenes

| Campo | Valor |
|-------|-------|
| **Fecha** | 3 Febrero 2026 |
| **Decision** | Astro nativo (Sharp + cache) para AMBOS tipos inicialmente. Si build time >5 min, migrar a Cloudflare Images. |
| **Videos** | Wistia (ya existente) |

### ADR-017: Contenido Hardcodeado vs CMS

| Campo | Valor |
|-------|-------|
| **Fecha** | 3 Febrero 2026 |
| **Decision** | **Hibrido: Blog en CMS (WordPress), paginas corporativas hardcodeadas en Astro** |
| **Razon** | Blog necesita CMS por alta frecuencia. Corporativo mejor en codigo por control y performance. |

---

## Decisiones Pendientes

| # | Decision | Opciones | Responsable | Cuando |
|---|----------|----------|-------------|--------|
| 1 | **Dominio admin WP** | admin.qamarero.com / cms.qamarero.com | Miguel | Setup |
| 2 | **URL final Francia** | qamarero.fr redirige a qamarero.com/fr | Miguel | Post-launch |

---

## Alternativas Evaluadas (No Elegidas)

### CMS Alternativos mencionados por Lole

| CMS | Descripcion | Por que no |
|-----|-------------|------------|
| Tina.io | CMS Git-based, optimo para Core Web Vitals | Con publicacion frecuente (1+/dia), requiere rebuild por cada cambio |
| Prismic | CMS headless | Equipo no lo conoce, sin ventaja clara sobre WP |

---

**Owner:** Miguel Ortiz Peralta
**Ultima actualizacion:** 3 Febrero 2026
