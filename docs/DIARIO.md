# Web Astro - Diario del Proyecto

**Proposito:** Registro cronologico de actividades, decisiones y progreso del proyecto.

---

## Febrero 2026

### 6 Feb 2026 - Migracion documentacion a proyecto dev

| Campo | Detalle |
|-------|---------|
| **Actividad** | Migrar toda la documentacion de Google Drive a qamarero-apps/astro-template |
| **Resultado** | Documentacion completa disponible en /docs |

---

### 3 Feb 2026 - Inicio Semana 6

| Campo | Detalle |
|-------|---------|
| **Estado** | Setup pendiente |
| **Prioridad** | Empezar con paginas de productos y pagina principal |
| **Objetivo semana** | Migracion a Astro creando paginas estaticas |

**Tipologias de pagina a trabajar:**
- Pagina principal
- Paginas de producto
- Paginas de soluciones
- Casos de exito
- Blog
- Paginas miscelaneas (About, Prensa, etc.)

**Nota importante:** Revisar Product Marketing y contenido de features nuevas de cada producto. Ir alineado con Product Marketing.

---

## Enero 2026

### 31 Ene 2026 - Conversacion Slack con Lole (Estrategia URLs)

**Participantes:** Miguel, Lole
**Canal:** #03-marketing-website-2026

**Tema:** Estrategia de locales en URLs

**Respuesta Miguel:**

Estrategia de URLs por idioma - Usamos subfolders (subdirectorios), no subdominios:
- ES (principal) -> qamarero.com (raiz, sin /es)
- FR -> qamarero.com/fr
- EN -> qamarero.com/en
- IT -> qamarero.com/it

**Por que subfolders y no subdominios:**
- SEO: Google prefiere subfolders, consolida autoridad de dominio
- Simplicidad: Un solo dominio, un certificado SSL, una config de analytics
- WordPress Multisite lo soporta nativo
- Vercel routea todo desde el mismo proyecto

**Feedback Lole:** "100% con los subdirectorios, en Cabi nos dan muchas alegrias."

---

### 30 Ene 2026 - Lole comparte toml de Netlify (Cabify)

**Participantes:** Miguel, Lole
**Canal:** #03-marketing-website-2026

**Contexto:** Lole comparte configuracion de Netlify que usan en Cabify como referencia.

**Incluye:**
- Serverless Functions (AWS Lambda)
- Edge Functions
- Headers de cache y seguridad
- CSP (Content Security Policy)
- URL Rewrites por locale
- Manejo de sitemaps por idioma
- Manejo de 404

---

### 29 Ene 2026 - Conversacion Slack con Lole (Stack Tecnico)

**Participantes:** Miguel, Lole
**Canal:** #03-marketing-website-2026

**Contexto:** Lole pregunta por que este stack tecnologico.

**Stack tecnico:**
- Frontend: Astro + React + shadcn/ui + Tailwind, desplegado en Vercel
- Backend: WordPress Multisite + WPGraphQL, alojado en Cloudways

**Por que Astro:**
Lo usan Cloudflare, Vercel, Porsche, NordVPN, Google y The Guardian.

La diferencia con otros frameworks es que esta pensado para rendimiento desde el diseno. Por defecto no envia JavaScript al navegador - solo HTML estatico. Solo carga JS en los componentes que realmente lo necesitan ("Islands Architecture").

**Respuesta Lole:** "Vamos! pedazo de explicacion. Gracias por el contexto y manana nos tomamos un cafe!"

---

### 29 Ene 2026 - Lole comparte alternativas y checklist

**Alternativas que Lole ha visto a WP que tiran de Astro:**
- https://tina.io/
- https://prismic.io/

**Nota de Lole:** Tina es lo mas optimo para web core vitals ya que basicamente tira de una build estatica.

**Checklist de Cabify para validar el stack:**

```
- [x] Build basic project structure
- [x] Add primary sections
- [x] Create basic partials for headers and footers
- [x] Add localization config
- [x] Add localized sample page
- [x] Pass content to a module dynamically
- [x] Create a custom layout for a localized page
- [x] Create a subsection inside a primary section
- [x] Provide shared data for multiple pages
- [x] Define initial JS and CSS bundling config
- [x] Chunk global CSS POC
- [x] Create basic Readme
- [x] Create repo on GitHub
- [x] Define final JS and CSS bundling architecture
```

**Recomendacion Lole:** "Haz algo similar para el approach que tienes en la cabeza para Qamarero y solo te queda probar y tachar!"

---

### 28 Ene 2026 - Reunion con Antonio (Alineacion)

| Campo | Detalle |
|-------|---------|
| **Participantes** | Antonio, Miguel |
| **Duracion** | ~50 min |
| **Tipo** | One-on-one / Alineacion |

**Decisiones clave:**

| Decision | Detalle |
|----------|---------|
| **Deadline** | 9 Marzo 2026 (5 semanas) |
| **Lole entra** | 9 marzo, viene de Cabify, lleva diseno |
| **Serrano** | Evolucion limitada, puede salir a medio plazo |
| **Figma referencia** | Usar "Qamarero Landing (NEW)" |
| **Componentes** | shadcn.io |
| **Prioridades** | Solo 2: Web Astro + Conversion Tool |
| **Metodologia** | "Los meses son semanas" - resultados medibles semanalmente |

**Feedback de Antonio:**
- La web actual es un 4-5/10, inaceptable despues de meses
- Necesita visibilidad clara de que estoy haciendo
- Quiere poder meterse en el proyecto y trabajar juntos
- Estructura: Objetivo claro + Estado + Siguiente paso + Deadline

---

### 28 Ene 2026 - Lole se une al canal Slack

**Canal:** #03-marketing-website-2026

**Contexto:**
- Antonio anade a Lole al canal
- Lole: "Buenasss! que tal familia! aqui el infiltrado hasta que llegue Marzo XD"

**Sobre disponibilidad de Lole:**
- Incorporacion para Marzo porque salida de Cabify va a ser intensa
- Dos motivos: hand-off del roadmap 2026 a su manager y cerrar performance/promociones de su equipo
- Intencion este mes: entender todo lo posible de Qamarero para aportar valor cuando llegue

---

### 26 Ene 2026 - Reunion con Serrano (Disenador)

| Campo | Detalle |
|-------|---------|
| **Participantes** | Miguel, Serrano |
| **Formato** | Videollamada |

**Tema:** Kickoff adaptacion de disenos Figma existentes para migracion a Astro.

**Decision:** Adaptar disenos existentes (no redisenar desde cero).

**Siguiente paso:** Serrano revisa Figma y propone plan de adaptacion.

---

### 23 Ene 2026 - Creacion Proyecto (Estandar ABC)

| Actividad | Detalle |
|-----------|---------|
| **Proyecto creado** | Carpeta Projects/wp-headless-astro/ con documentacion completa |
| **Documentos** | PROJECT_BRIEF, PRD, STAKEHOLDERS, DECISIONS, RISKS, ESTADO_PROYECTO |
| **Notion** | Pagina creada en Miguel-Organic |
| **Asana** | 20 tareas creadas |

---

### 8 Ene 2026 - Propuesta Inicial + Go-ahead

| Actividad | Detalle |
|-----------|---------|
| **Propuesta Slack** | Miguel presenta arquitectura WP Headless + Astro |
| **Respuesta Antonio** | Propone crear "creador de paginas web propio" para clientes |
| **Go-ahead** | Antonio: "vamos a hacerlo la semana q viene" |

**Nota:** "Creador de paginas para clientes" es proyecto SEPARADO.

---

## Links Importantes

| Recurso | URL |
|---------|-----|
| Notion original | https://www.notion.so/qamarero/WP-Headless-Astro-2e2aff5df4ae801ab1baea5593f1d01a |
| shadcnblocks | https://www.shadcnblocks.com/themes |
| Tina (alternativa CMS) | https://tina.io/ |
| Prismic (alternativa CMS) | https://prismic.io/ |

---

**Owner:** Miguel Ortiz Peralta
**Ultima actualizacion:** 6 Febrero 2026
