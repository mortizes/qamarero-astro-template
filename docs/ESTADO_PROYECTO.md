# Web Astro - Estado del Proyecto

**Ultima actualizacion:** 6 Febrero 2026
**Owner:** Miguel Ortiz Peralta
**Deadline:** 9 Marzo 2026 (entrada de Lole)

---

## Estado Actual

**Documentacion de arquitectura COMPLETA - En desarrollo**

Todas las decisiones de arquitectura documentadas (12 documentos). Setup de proyecto en curso.

### Documentacion completada (3 Feb 2026)

| Area | Documentos | Estado |
|------|------------|--------|
| Gestion contenido | 1.1, 1.2, 1.3 | ✅ Completo |
| Arquitectura tecnica | 3.1, 3.2, 3.4, 3.5 | ✅ Completo |
| Multi-idioma | 4.2, 4.3 | ✅ Completo |
| Integracion | 5.1, 5.2 | ✅ Completo |
| **Total** | **12 documentos** | ✅ **Listo para desarrollo** |

Ver [decisiones/DECISIONES-ARQUITECTURA.md](./decisiones/DECISIONES-ARQUITECTURA.md) para indice completo.

---

## Esta Semana (S6: 3 - 9 Feb)

**Objetivo:** Empezar con paginas de productos y pagina principal, haciendo migracion a Astro creando paginas estaticas.

| Tarea | Status |
|-------|--------|
| Crear repo GitHub (qamarero-web-astro) | ⏳ En progreso |
| Setup Astro + Tailwind + shadcn | ✅ Template base listo |
| Conectar con WordPress Headless (Cloudways) | Pendiente |
| Deploy inicial en Vercel | Pendiente |
| Home page ES | Pendiente |
| Paginas de producto | Pendiente |

---

## Fases del Proyecto

### V1: Web Migrada (27 Ene - 9 Feb)

**KR:** Web migrada a Astro + WordPress Headless, funcionando en Vercel.

| Entregable | Status |
|------------|--------|
| WordPress Multisite (ES, FR, EN, IT) | Pendiente |
| WPGraphQL + ACF Pro | Pendiente |
| Repo GitHub + Astro + shadcn | ✅ En progreso |
| Templates: Home, Producto, Demo, Pricing, Blog | Pendiente |
| Deploy Vercel | Pendiente |

**Se mide con:** Web visible en Vercel con contenido.

---

### V2: Rendimiento (10 - 16 Feb)

**KR:** Core Web Vitals todos en verde, PageSpeed 95+.

| Entregable | Status |
|------------|--------|
| Optimizar imagenes (WebP, lazy loading) | Pendiente |
| Eliminar JavaScript innecesario | Pendiente |
| Optimizar fonts y CSS | Pendiente |
| LCP < 2.5s, FID < 100ms, CLS < 0.1 | Pendiente |

**Se mide con:** Search Console + PageSpeed Insights.

---

### V3: Conversion Web -> Demo (17 - 23 Feb)

**KR:** CR Web->Demo de 1.02% -> 2% (+96%).

| Entregable | Status |
|------------|--------|
| CTAs mas claros y visibles | Pendiente |
| Hero optimizado para conversion | Pendiente |
| Social proof (testimonios, logos) | Pendiente |
| Reducir friccion en navegacion | Pendiente |

**Se mide con:** Clarity (Visitas Demo / Sesiones Web).

---

### V4: Conversion Demo -> Completada (24 Feb - 2 Mar)

**KR:** CR Demo->Completada de 15.8% -> 20% (+27%).

| Entregable | Status |
|------------|--------|
| Formulario optimizado (menos campos) | Pendiente |
| Propuesta de valor clara en pagina demo | Pendiente |
| Reducir tiempo de carga del form | Pendiente |
| A/B test de variantes | Pendiente |

**Se mide con:** Clarity (Forms completados / Visitas Demo).

---

### V5: Conversion Global (3 - 7 Mar)

**KR:** CR Global de 0.16% -> 0.40% (+150%).

| Entregable | Status |
|------------|--------|
| QA completo end-to-end | Pendiente |
| Redirects 301 funcionando | Pendiente |
| Traducciones (FR, EN, IT) listas | Pendiente |
| Testing cross-browser + mobile | Pendiente |

**Se mide con:** Clarity (Forms completados / Sesiones totales).

---

### V6: Mejor Web del Sector (8 - 9 Mar)

**KR:** Benchmark competencia de 4-5/10 -> 8/10.

| Entregable | Status |
|------------|--------|
| Launch web nueva | Pendiente |
| Handoff a Lole | Pendiente |
| Tiempo crear landing: 2-4 horas | Pendiente |
| Evaluacion vs competencia | Pendiente |

**Se mide con:** Evaluacion manual + Tiempo de produccion de landings.

---

## Metricas de Exito

| Metrica | Actual | Target | Como medir |
|---------|--------|--------|------------|
| PageSpeed | 40-60 | 95+ | PageSpeed Insights |
| Tiempo carga | 2-4s | <0.5s | PageSpeed Insights |
| Core Web Vitals | Algunos rojos | Todos verde | Search Console |
| CR Web->Demo | 1.02% | 2% | Clarity |
| CR Demo->Form | 15.8% | 20% | Clarity |
| CR Global | 0.16% | 0.40% | Clarity |
| Tiempo crear landing | 2-3 dias | 2-4 horas | Tracking manual |

---

## Links

| Recurso | Link |
|---------|------|
| Asana | https://app.asana.com/0/1212948739058506/1212948739058506 |
| Notion | https://www.notion.so/qamarero/WP-Headless-Astro-Q1-2026-2f1aff5df4ae81399e4deeecda7106d5 |
| Figma NEW | https://www.figma.com/design/nMxhWN6VjsaMhV1CE8rJWG/Qamarero-Landing |
| Slack | #03-marketing-website-2026 |
| GitHub | qamarero-apps/astro-template |

---

## Contexto Importante

### Por que este proyecto es prioritario

1. **Web actual = 4-5/10** segun Antonio (inaceptable despues de meses)
2. **Lole entra el 9 marzo** y necesita infraestructura lista
3. **Impacto directo en conversion** = mas leads organicos
4. **CR Global actual 0.16%** muy por debajo del benchmark (0.5-1%)

### Serrano

- Antonio ve "evolucion limitada"
- Puede no continuar a medio plazo
- Todo diseno lo llevara Lole a partir del 9 marzo

### Lole

- Viene de Cabify
- Entra el 9 marzo
- Llevara diseno y evolucion de la web
- Ya esta en el canal de Slack #03-marketing-website-2026
- Ha compartido experiencias y configs de Cabify (Netlify toml, checklist validacion)

---

**Para retomar:** Lee el CLAUDE.md del proyecto y el docs/decisiones/DECISIONES-ARQUITECTURA.md para contexto completo.

---

**Ultima actualizacion:** 6 Febrero 2026
**Estado documentacion:** ✅ Completa (12 documentos de arquitectura)
