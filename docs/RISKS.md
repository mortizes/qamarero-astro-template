# WP Headless + Astro - Riesgos

**Version:** 1.1
**Fecha:** 3 Febrero 2026

---

## Registro de Riesgos

| ID | Riesgo | Prob | Impacto | Score | Mitigacion | Owner |
|----|--------|------|---------|-------|------------|-------|
| R1 | **Contenido no migra correctamente** | Media | Alto | 6 | Migracion incremental, validacion por pagina | Miguel |
| R2 | **SEO afectado temporalmente** | Media | Alto | 6 | Redirects 301, Schema SEO, Search Console | Miguel |
| R3 | **Curva aprendizaje equipo** | Media | Medio | 4 | Documentacion completa, training | Miguel |
| R4 | **Dependencia de Vercel** | Baja | Medio | 2 | Astro portable, backup en Netlify | Miguel |
| R5 | **GraphQL performance** | Baja | Medio | 2 | Cache, queries optimizadas | Miguel |
| R6 | **Cloudways downtime** | Baja | Alto | 3 | Cache frontend, paginas estaticas | Miguel |
| R7 | **Lole no entiende el stack** | Media | Medio | 4 | Documentacion + training S10 | Miguel |

---

## Detalle de Riesgos Criticos

### R1: Contenido No Migra Correctamente

**Descripcion:** Al migrar de WordPress tradicional a headless, el contenido (imagenes, formatos, shortcodes) podria no renderizar bien.

**Probabilidad:** Media
**Impacto:** Alto

**Mitigacion:**
1. Migracion incremental (ES primero, luego otros idiomas)
2. Validacion visual pagina por pagina
3. Script de limpieza de shortcodes
4. Backup completo antes de migrar

**Plan B:** Mantener WP actual en paralelo durante 1 semana post-launch

---

### R2: SEO Afectado Temporalmente

**Descripcion:** El cambio de arquitectura podria afectar rankings de Google temporalmente.

**Probabilidad:** Media
**Impacto:** Alto

**Mitigacion:**
1. Redirects 301 para todas las URLs antiguas
2. Schema SEO en todas las paginas (FAQ, Organization, etc.)
3. Sitemap actualizado y enviado a Search Console
4. Monitoreo diario de rankings durante 2 semanas

**Plan B:** Si rankings caen >20%, investigar y corregir inmediatamente

---

### R3: Curva Aprendizaje Equipo

**Descripcion:** El equipo no conoce Astro ni la arquitectura headless.

**Probabilidad:** Media
**Impacto:** Medio

**Mitigacion:**
1. Documentacion completa con ejemplos
2. Video tutorial de 30 min
3. Sesion hands-on de 1h
4. Cheatsheet de comandos frecuentes

**Plan B:** Miguel como unico editor tecnico durante Q1

---

### R7: Lole No Entiende el Stack (NUEVO)

**Descripcion:** Lole entra el 9 marzo y necesita entender la nueva arquitectura rapidamente para poder evolucionar la web.

**Probabilidad:** Media
**Impacto:** Medio

**Mitigacion:**
1. Documentacion completa lista antes del 9 marzo
2. Training session en S10 (3-9 marzo)
3. Lole ya esta en canal Slack aprendiendo
4. Ha compartido experiencia de Cabify (conoce arquitecturas similares)
5. Checklist de validacion compartido por Lole

**Plan B:** Miguel continua como soporte tecnico hasta que Lole domine el stack

**Nota positiva:** Lole tiene experiencia con:
- Netlify (alternativa a Vercel)
- Arquitecturas multi-idioma
- A/B testing
- CMS headless (conoce Tina.io, Prismic)

---

## Criterios de Kill

Abandonar el proyecto si:
- [ ] Migracion toma >3 semanas
- [ ] PageSpeed Score <80 despues de optimizaciones
- [ ] SEO rankings caen >50% sin recuperacion en 4 semanas
- [ ] Antonio decide cambio de prioridades

## Criterios de Double Down

Invertir mas recursos si:
- [ ] PageSpeed Score 98-100/100
- [ ] Tiempo crear landing <2 horas
- [ ] Equipo adopta rapidamente
- [ ] Antonio quiere acelerar creador paginas clientes

---

## Plan de Contingencia

| Escenario | Accion |
|-----------|--------|
| **Falla critica en launch** | Revertir DNS a WordPress actual |
| **Vercel tiene problemas** | Deploy temporal en Netlify |
| **GraphQL muy lento** | Anadir cache Apollo |
| **Contenido corrupto** | Restaurar desde backup Cloudways |
| **Lole no puede con el stack** | Miguel continua como soporte tecnico |

---

**Owner:** Miguel Ortiz Peralta
**Ultima actualizacion:** 3 Febrero 2026
