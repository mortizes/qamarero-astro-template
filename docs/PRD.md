# WP Headless + Astro - PRD (Product Requirements Document)

**Version:** 1.1
**Fecha:** 3 Febrero 2026
**Owner:** Miguel Ortiz Peralta

---

## 1. Contexto

### 1.1 Problema

La web actual de WordPress tiene limitaciones criticas:

1. **Velocidad:** 6.5 segundos de carga (PageSpeed 76/100)
2. **Seguridad:** WordPress expuesto publicamente
3. **Productividad:** 2-3 dias para crear una landing page
4. **Escalabilidad:** Anadir nuevos idiomas es complejo
5. **Conversion:** CR Global 0.16% (benchmark: 0.5-1%)

### 1.2 Metricas Actuales (2025)

| Metrica | Valor Actual | Benchmark | Gap |
|---------|--------------|-----------|-----|
| Page Load | 6.5s | <3s | +3.5s |
| PageSpeed | 76/100 | 80+ | -4 puntos |
| CR Web->Demo | 1.02% | 3-5% | -66% |
| CR Demo->Form | 15.8% | 20-30% | -21% |
| CR Global | 0.16% | 0.5-1% | -68% |
| Bounce Rate | 72.64% | <50% | +22% |

### 1.3 Solucion

Arquitectura headless que separa:
- **Backend:** WordPress Multisite en Cloudways (oculto en `admin.qamarero.com`)
- **Frontend:** Astro en Vercel (publico en `qamarero.com`)

---

## 2. Arquitectura

### 2.1 Diagrama de Componentes

```
+-----------------------------+
|     USUARIOS FINALES        |
|   qamarero.com (publico)    |
+--------------+--------------+
               |
        +------v------+
        |  FRONTEND   |
        |             |
        |  ASTRO      |
        |  en VERCEL  |
        |             |
        | Componentes:|
        | - React     |
        | - Tailwind  |
        | - TypeScript|
        +------+------+
               |
          GraphQL API
               |
        +------v------+
        |  BACKEND    |
        |             |
        |  WP         |
        |  MULTISITE  |
        |  CLOUDWAYS  |
        |             |
        | Red sitios: |
        | - ES        |
        | - EN        |
        | - FR        |
        | - IT        |
        +-------------+
```

### 2.2 Backend: WordPress Multisite

**Hosting:** Cloudways (actual, sin cambios)
**URL:** `admin.qamarero.com` (privado)
**Acceso:** Solo equipo interno

**Red de Sitios:**
```
Network:
+-- Network Admin (gestion centralizada)
+-- Sitio ES (principal)
|   +-- URL: admin.qamarero.com
|   +-- Tablas: wp_posts, wp_postmeta...
+-- Sitio EN
|   +-- URL: admin.qamarero.com/en/
|   +-- Tablas: wp_2_posts, wp_2_postmeta...
+-- Sitio FR
|   +-- Tablas: wp_3_*
+-- Sitio IT
    +-- Tablas: wp_4_*
```

**Plugins Requeridos:**
- WPGraphQL (API para Astro)
- WPGraphQL for ACF (campos personalizados en API)
- ACF Pro (FAQs, CTAs, configuraciones)
- Rankmath (gestion SEO)

### 2.3 Frontend: Astro + Vercel

**Plataforma:** Vercel
**URL:** `qamarero.com` (publico)
**CDN:** 150+ ubicaciones globales
**Deploy:** Automatico en cada push

**Tech Stack:**
- Astro: Framework principal
- React: Componentes interactivos
- Tailwind CSS: Diseno utility-first
- TypeScript: Type safety
- shadcn/ui: Libreria de componentes

### 2.4 Estructura de Archivos (Frontend)

```
/src/
+-- components/
|   +-- layout/
|   |   +-- Header.astro
|   |   +-- Footer.astro
|   |   +-- Navigation.astro
|   +-- sections/
|   |   +-- Hero/
|   |   +-- Features/
|   |   +-- CTA/
|   |   +-- Testimonials/
|   |   +-- FAQ/
|   +-- ui/
|       +-- Button.astro
|       +-- Card.astro
|       +-- Form.astro
+-- pages/
|   +-- index.astro (ES)
|   +-- en/
|   +-- fr/
|   +-- it/
+-- lib/
    +-- wordpress.ts (GraphQL client)
```

---

## 3. Estrategia de URLs

### 3.1 Estructura por Idioma

Usamos **subfolders** (subdirectorios), no subdominios:

| Idioma | URL Publica | URL Admin |
|--------|-------------|-----------|
| ES (principal) | qamarero.com | admin.qamarero.com |
| EN | qamarero.com/en | admin.qamarero.com/en/ |
| FR | qamarero.com/fr | admin.qamarero.com/fr/ |
| IT | qamarero.com/it | admin.qamarero.com/it/ |

### 3.2 Por que Subfolders

- **SEO:** Google prefiere subfolders, consolida autoridad de dominio en uno solo
- **Simplicidad:** Un solo dominio, un solo certificado SSL, una sola config de analytics
- **WP Multisite:** Lo soporta nativo con la opcion "subdirectory"
- **Vercel:** Routea todo desde el mismo proyecto

### 3.3 Migracion qamarero.fr

Despues del launch, qamarero.fr redirigira 301 a qamarero.com/fr para unificar todo bajo el dominio principal.

---

## 4. Funcionalidades

### 4.1 MVP (Q1 2026)

| Funcionalidad | Descripcion | Prioridad |
|---------------|-------------|-----------|
| Home ES | Pagina principal espanol | P0 |
| Home EN/FR/IT | Paginas principales idiomas | P1 |
| Paginas servicios | Comandero, KDS, etc. | P1 |
| Blog | Posts dinamicos | P2 |
| FAQs | Acordeon + Schema SEO | P1 |
| Formularios | Contacto, demo | P1 |

### 4.2 Futuro (Q2+)

| Funcionalidad | Descripcion | Prioridad |
|---------------|-------------|-----------|
| Integracion CRM | Sync con HubSpot | P2 |
| Analytics custom | Dashboards propios | P2 |
| E-commerce | Tienda online | P3 |

> **Nota:** "Creador de paginas para clientes" (mencionado por Antonio) es un proyecto SEPARADO, no parte de esta migracion.

---

## 5. Flujo de Datos

### 5.1 Build Time (Paginas Estaticas)

```
1. GitHub push -> Vercel inicia build
2. Astro ejecuta queries GraphQL a WordPress
3. WordPress devuelve TODO el contenido
4. Astro genera HTML estatico
5. Vercel publica en CDN
6. Usuario recibe HTML instantaneo
```

### 5.2 Runtime (Paginas Dinamicas)

```
1. Usuario visita pagina
2. Astro consulta WordPress en tiempo real
3. WordPress devuelve datos actuales
4. Astro renderiza pagina
5. Usuario ve contenido actualizado
```

### 5.3 Actualizacion de Contenido

```
1. Editor entra a admin.qamarero.com
2. Edita pagina (igual que siempre)
3. Guarda/Publica
4. WordPress almacena en BD
5. Rebuild automatico (webhook)
6. Cambios visibles en 30s-3min
```

---

## 6. Metricas de Exito

| Metrica | Antes | Despues | Mejora |
|---------|-------|---------|--------|
| PageSpeed | 76/100 | 95-100 | +25% |
| Tiempo carga | 6.5s | <0.5s | -92% |
| TTFB | 800-1200ms | 50-100ms | -90% |
| CR Web->Demo | 1.02% | 2% | +96% |
| CR Demo->Form | 15.8% | 20% | +27% |
| CR Global | 0.16% | 0.40% | +150% |
| Bounce Rate | 72.64% | <50% | -31% |
| Tiempo crear landing | 2-3 dias | 2-4 horas | 10-20x |

---

## 7. Gestion Multiidioma

### 7.1 Estructura

Cada idioma = Sitio independiente en la red:

```
Sitio ES: admin.qamarero.com
Sitio EN: admin.qamarero.com/en/
Sitio FR: admin.qamarero.com/fr/
Sitio IT: admin.qamarero.com/it/
```

### 7.2 Traduccion (sin WPML)

1. Contenido maestro creado en sitio ES
2. Editor/traductor va a sitio EN
3. Crea pagina equivalente traducida
4. Astro mapea URLs entre idiomas

### 7.3 Campo ACF para vincular

```
translation_links (por pagina):
+-- EN -> ID pagina ingles
+-- FR -> ID pagina frances
+-- IT -> ID pagina italiano
```

---

## 8. Seguridad

| Aspecto | Reduccion Riesgo |
|---------|------------------|
| Brute force | -95% |
| SQL injection | -90% |
| XSS attacks | -100% |
| Plugin vulnerabilities | -70% |
| Malware injection | -100% |

**Capas de proteccion:**
- WordPress oculto al publico
- CORS restrictivo
- Rate limiting
- Frontend estatico (imposible hackear)

---

## 9. Tech Stack Completo

| Capa | Tecnologia | Version |
|------|------------|---------|
| Framework | Astro | @latest |
| React | React 19 | @latest |
| Styling | Tailwind CSS 4 | @latest |
| Componentes | shadcn/ui | @latest |
| CMS | WordPress Multisite | 6.x |
| API | WPGraphQL | @latest |
| Campos | ACF Pro | @latest |
| SEO | Rankmath | @latest |
| Deploy | Vercel | - |
| Hosting WP | Cloudways | - |

---

## 10. Requisitos No Funcionales

| Categoria | Requisito |
|-----------|-----------|
| **Performance** | PageSpeed >=95, LCP <1s, FID <100ms, CLS <0.1 |
| **Disponibilidad** | 99.9% uptime (Vercel + Cloudways) |
| **Seguridad** | WordPress no accesible publicamente |
| **Escalabilidad** | Anadir idioma en <5 dias |
| **Mantenibilidad** | Codigo en GitHub, deploy automatico |

---

## 11. Dependencias Tecnicas

| Dependencia | Estado | Owner |
|-------------|--------|-------|
| Cuenta Cloudways | Activa | Miguel |
| Cuenta Vercel | Activa | Miguel |
| Dominio DNS | Control | IT |
| WPGraphQL | Plugin gratuito | Comunidad |
| shadcn/ui | Disponible | Open Source |

---

## 12. Validacion del Stack (Checklist)

Basado en checklist de Cabify compartido por Lole:

- [ ] Build basic project structure
- [ ] Add primary sections
- [ ] Create basic partials for headers and footers
- [ ] Add localization config
- [ ] Add localized sample page
- [ ] Pass content to a module dynamically
- [ ] Create a custom layout for a localized page
- [ ] Create a subsection inside a primary section
- [ ] Provide shared data for multiple pages
- [ ] Define initial JS and CSS bundling config
- [ ] Chunk global CSS POC
- [ ] Create basic Readme
- [ ] Create repo on GitHub
- [ ] Define final JS and CSS bundling architecture

---

**Owner:** Miguel Ortiz Peralta
**Ultima actualizacion:** 3 Febrero 2026
