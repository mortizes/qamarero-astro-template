# Decisiones Arquitectonicas - Qamarero

**Documento maestro de TODAS las decisiones tecnicas del proyecto**

---

## Contexto del Proyecto

**Deadline:** 9 Marzo 2026 (entrada de Lole)
**Objetivo:** Migrar web a Astro + WordPress Headless, PageSpeed 95+, CR Global 0.16% → 0.40%
**Scope:** Web corporativa multi-idioma (ES, FR, EN, IT) con blog de alta frecuencia

---

## Metodologia

### Enfoque: Top-Down (De arriba hacia abajo)

**Empezamos con necesidades de negocio → Bajamos a decisiones tecnicas**

```
NIVEL 0: Necesidades de Negocio (¿Que necesitamos?)
├─ 0.1 Tipo de sitio
├─ 0.2 Tipos de contenido
└─ 0.3 Infraestructura base

NIVEL 1: Gestion de Contenido (¿CMS o codigo?)
├─ 1.1 CMS o Hardcodeado
├─ 1.2 Que CMS usar
└─ 1.3 Single/Multisite

NIVEL 3: Stack Tecnico - Frontend (¿Framework, hosting, assets?)
├─ 3.1 Framework frontend
├─ 3.2 Estrategia rendering
├─ 3.3 Hosting frontend
├─ 3.4 Gestion imagenes
├─ 3.5 Gestion videos
└─ 3.6 Componentes UI

NIVEL 4: Multi-idioma (¿URLs, gestion por pais?)
├─ 4.1 Estructura URLs
├─ 4.2 Multi-idioma en codigo
└─ 4.3 Segregacion permisos

NIVEL 5: Integracion Tecnica (¿Como conectamos todo?)
├─ 5.1 Integracion WP-Astro
└─ 5.2 Sincronizacion cambios
```

---

## Arquitectura Visual Completa

```
┌─────────────────────────────────────────────────────┐
│ USUARIO (Browser)                                   │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│ CDN (Vercel Edge Network)                           │
│ - Cache HTML (ISR)                                  │
│ - Cache estaticos (imagenes, CSS, JS)              │
│ - TTFB: <100ms cache hit                           │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│ FRONTEND (Vercel)                                   │
│ Framework: Astro                                    │
│ Rendering:                                          │
│ ├── SSG: Home, Features, Pricing (95-100 PageSpeed)│
│ └── ISR: Blog posts (90-95 PageSpeed)              │
│ UI: shadcn/ui + Tailwind                           │
│ Deploy: Auto (GitHub push)                          │
└─────────────────┬───────────────────────────────────┘
                  │ GraphQL API
                  ▼
┌─────────────────────────────────────────────────────┐
│ BACKEND - CMS (Cloudways)                           │
│ CMS: WordPress Multisite                            │
│ ├── Site ES: qamarero.com                          │
│ ├── Site FR: qamarero.com/fr                       │
│ ├── Site EN: qamarero.com/en                       │
│ └── Site IT: qamarero.com/it                       │
│ Plugins:                                            │
│ ├── WPGraphQL (expone contenido)                   │
│ ├── ACF Pro (custom fields)                        │
│ └── Webhook plugin (notifica cambios)              │
└─────────────────┬───────────────────────────────────┘
                  │ Webhook
                  ▼
┌─────────────────────────────────────────────────────┐
│ API ENDPOINT (Vercel)                               │
│ /api/revalidate                                     │
│ ├── Verifica token                                  │
│ └── Purga cache pagina modificada                  │
└─────────────────────────────────────────────────────┘
```

---

## Estado Completo de Decisiones

### Decisiones Infraestructura (✅ Decididas)

| # | Decision | Respuesta | Estado |
|---|----------|-----------|--------|
| **3.1** | Framework frontend | Astro | ✅ |
| **3.2** | Estrategia rendering | SSG + ISR | ✅ |
| **3.3** | Hosting frontend | Vercel | ✅ |
| **2.1** | Hosting backend | Cloudways | ✅ |
| **3.4** | Gestion imagenes | Astro nativo → Cloudflare | ✅ |
| **3.5** | Gestion videos | Wistia | ✅ |
| **4.1** | URLs multi-idioma | Subfolders | ✅ |
| **3.6** | Componentes UI | shadcn/ui + Tailwind | ✅ |

### Decisiones Contenido (⏳ A validar en desarrollo)

| # | Decision | Propuesta | Estado |
|---|----------|-----------|--------|
| **1.1** | CMS o Hardcodeado | Hibrido | ⏳ A validar |
| **1.2** | Que CMS usar | WordPress Headless | ⏳ A validar |
| **1.3** | Single/Multisite | Multisite | ⏳ A validar |

### Decisiones Multi-idioma (⏳ A validar)

| # | Decision | Propuesta | Estado |
|---|----------|-----------|--------|
| **4.2** | Multi-idioma codigo | Archivos separados | ⏳ A validar |
| **4.3** | Segregacion permisos | Multisite + CODEOWNERS | ⏳ A validar |

### Decisiones Integracion (⏳ A validar)

| # | Decision | Propuesta | Estado |
|---|----------|-----------|--------|
| **5.1** | Integracion WP-Astro | WPGraphQL + ISR | ⏳ A validar |
| **5.2** | Sincronizacion | Webhook → Vercel purge | ⏳ A validar |

---

## Resumen de Decisiones Clave

### 1. Tipo de Web
**Decision:** Web hibrida (SSG corporativo + ISR blog)

### 2. Gestion de Contenido
**Decision:** Hibrido - Blog en CMS (WordPress), corporativo hardcodeado en Astro

| Tipo | Gestion | Frecuencia | Editores |
|------|---------|------------|----------|
| **Blog** | CMS (WordPress) | 1+/dia | Marketing |
| **Corporativo** | Codigo (Astro) | <1x/mes | Miguel/Serrano |
| **Legal** | Codigo (Astro) | <1x/trimestre | Miguel + Legal |

### 3. CMS Elegido
**Decision:** WordPress Headless + ISR (no Tina)

**Por que:**
- Equipo ya lo conoce
- ISR <1 min (vs rebuilds 5 min con Tina)
- Workflows nativos (Draft → Review → Publish)

### 4. Multi-idioma
**Decision:** WordPress Multisite + Subfolders

**Estructura:**
```
qamarero.com/           → ES (principal)
qamarero.com/fr/        → FR
qamarero.com/en/        → EN
qamarero.com/it/        → IT
```

### 5. Integracion
**Decision:** WPGraphQL + ISR on-demand

**Flujo:**
```
Editor publica → Webhook → Vercel purge → <1 min visible
```

---

## Criterios Go/No-Go

- [ ] Tiempo publicar blog <1 min
- [ ] Performance corporativo >95 PageSpeed
- [ ] Performance blog >90 PageSpeed
- [ ] TTFB cache <100ms
- [ ] Segregacion por pais 100%
- [ ] Webhook confiabilidad 100%

---

## Referencias

- **DECISIONS.md:** Resumen de todos los ADRs
- **PRD.md:** Requisitos tecnicos detallados
- **ANALYTICS_2025.md:** Metricas actuales de la web

---

**Preparado por:** Miguel Ortiz Peralta
**Fecha:** 3 Febrero 2026
**Version:** 2.0
