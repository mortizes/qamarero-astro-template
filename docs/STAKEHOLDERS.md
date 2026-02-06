# WP Headless + Astro - Stakeholders

**Version:** 1.1
**Fecha:** 3 Febrero 2026

---

## Matriz RACI

| Actividad | Miguel (Owner) | Antonio (CEO) | Lole (Diseno) | Javi Guardado (Dev) | Serrano (Diseno) |
|-----------|----------------|---------------|---------------|---------------------|------------------|
| Desarrollo tecnico | **R** | I | I | C | I |
| Decisiones estrategicas | C | **A** | I | I | I |
| Setup WordPress Multisite | **R** | I | I | C | I |
| Setup Astro + Vercel | **R** | I | I | C | I |
| Migracion contenido | **R** | I | I | I | I |
| Diseno/UI | C | I | **R** (post 9 mar) | I | **R** (hasta 9 mar) |
| Aprobacion launch | C | **A** | I | I | I |
| Mantenimiento post-launch | **R** | I | C | C | I |

> **R** = Responsible (hace el trabajo)
> **A** = Accountable (aprueba)
> **C** = Consulted (da input)
> **I** = Informed (se le notifica)

---

## Stakeholders Detalle

### Miguel Ortiz Peralta (Owner)

| Campo | Valor |
|-------|-------|
| **Rol** | Product Owner + Developer |
| **Responsabilidades** | Desarrollo, configuracion, migracion, documentacion, contenido EN |
| **Disponibilidad** | Full-time |
| **Canal** | Slack @Miguel Ortiz |

### Antonio (CEO/Sponsor)

| Campo | Valor |
|-------|-------|
| **Rol** | Sponsor ejecutivo |
| **Responsabilidades** | Decisiones estrategicas, aprobacion scope, recursos |
| **Disponibilidad** | Async preferido, sync si es P0 |
| **Canal** | Slack @Antonio |
| **Feedback** | "Web actual es un 4-5/10, inaceptable" |
| **Metodologia** | "Los meses son semanas" - resultados medibles semanalmente |

### Lole Roman (Diseno - Nuevo)

| Campo | Valor |
|-------|-------|
| **Rol** | Lead Design (a partir 9 marzo) |
| **Procedencia** | Cabify |
| **Fecha entrada** | 9 Marzo 2026 |
| **Responsabilidades** | Diseno, evolucion de la web, A/B testing |
| **Disponibilidad** | Limitada hasta marzo (salida de Cabify intensa) |
| **Canal** | Slack @lole.roman |
| **Estado actual** | Ya en canal #03-marketing-website-2026, aprendiendo sobre Qamarero |

**Contexto Lole:**
- Salida de Cabify intensa: hand-off roadmap 2026 + cerrar performance/promociones de su equipo
- Intencion este mes: entender todo lo posible de Qamarero para aportar valor cuando llegue
- Ha compartido configs de Netlify de Cabify y checklist de validacion de stack
- Conoce alternativas CMS (Tina.io, Prismic)
- Experiencia con A/B testing

### Javi Guardado (Dev)

| Campo | Valor |
|-------|-------|
| **Rol** | Developer (soporte) |
| **Responsabilidades** | Consultas puntuales (infra, estructura) |
| **Disponibilidad** | Por definir |
| **Canal** | Slack @JaviGuardado |
| **Recomendacion** | Usar Vercel |

### Serrano (Disenador - Saliendo)

| Campo | Valor |
|-------|-------|
| **Rol** | Disenador actual |
| **Estado** | "Evolucion limitada" segun Antonio, puede salir a medio plazo |
| **Responsabilidades** | Adaptacion disenos Figma existentes hasta entrada de Lole |
| **Ultima reunion** | 26 Enero 2026 - Kickoff adaptacion disenos |

### Carlos (Contenido FR)

| Campo | Valor |
|-------|-------|
| **Rol** | Revision contenido Francia |
| **Responsabilidades** | Revisar/adaptar contenido para qamarero.com/fr |
| **Canal** | Slack |

---

## Decisiones Validadas (Enero 2026)

| Pregunta | Respuesta |
|----------|-----------|
| **Owner** | Miguel (100%) |
| **Javi Guardado** | Solo consultas puntuales (infra, estructura) |
| **Estrategia migracion** | Francia primero (qamarero.fr), luego todo |
| **Contenido FR** | Carlos revisa |
| **Contenido EN** | Miguel |
| **Contenido IT** | Se mantiene actual |
| **Deploy** | Vercel (recomendacion Javi) |
| **Diseno post 9 marzo** | Lole |

---

## Gestion de Contenido por Idioma

| Idioma | Responsable | Estado Actual |
|--------|-------------|---------------|
| **ES** | Miguel | En produccion |
| **EN** | Miguel | En produccion |
| **FR** | Carlos (revision) | qamarero.fr (dominio separado) |
| **IT** | Se mantiene | En produccion |

---

## Canales de Comunicacion

| Canal | Proposito | Participantes |
|-------|-----------|---------------|
| **#03-marketing-website-2026** | Canal principal del proyecto | Antonio, Miguel, Lole |
| **Slack DM** | Decisiones rapidas | Miguel <-> Antonio |
| **Notion** | Documentacion central | Todos |
| **GitHub** | Codigo, PRs, issues | Miguel, Javi |
| **Asana** | Gestion de tareas | Miguel |

---

## Escalacion

| Nivel | Tipo | Quien escala | A quien |
|-------|------|--------------|---------|
| 1 | Bloqueo tecnico | Miguel | Javi |
| 2 | Cambio de scope | Miguel | Antonio |
| 3 | Recursos adicionales | Miguel | Antonio |

---

## Historial Interacciones

| Fecha | Interaccion | Participantes | Resultado |
|-------|-------------|---------------|-----------|
| 8 Ene 2026 | Propuesta Slack inicial | Miguel | Propuesta arquitectura |
| 8 Ene 2026 | Respuesta Slack | Antonio | Propone creador paginas clientes |
| 8 Ene 2026 | Go-ahead | Antonio | "vamos a hacerlo la semana q viene" |
| 23 Ene 2026 | Creacion proyecto | Miguel | Documentacion ABC creada |
| 26 Ene 2026 | Reunion Serrano | Miguel, Serrano | Adaptar disenos existentes |
| 28 Ene 2026 | Reunion Antonio | Miguel, Antonio | Deadline 9 marzo, prioridades claras |
| 28 Ene 2026 | Lole se une canal | Antonio, Lole | Lole en #03-marketing-website-2026 |
| 29 Ene 2026 | Explicacion stack | Miguel, Lole | Lole entiende arquitectura |
| 29 Ene 2026 | Checklist Cabify | Lole | Comparte checklist validacion stack |
| 30 Ene 2026 | Config Netlify | Lole | Comparte toml de Cabify |
| 31 Ene 2026 | Estrategia URLs | Miguel, Lole | Confirmado subfolders |

---

> **Nota:** "Creador de paginas para clientes" (mencionado por Antonio) es un proyecto SEPARADO.

---

**Owner:** Miguel Ortiz Peralta
**Ultima actualizacion:** 3 Febrero 2026
