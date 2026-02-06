# WP Headless + Astro - Project Brief

## Resumen Ejecutivo

Migración de la web actual de WordPress (única instancia) a una **arquitectura headless moderna** que separa backend (WordPress Multisite) y frontend (Astro), multiplicando velocidad, productividad y seguridad.

---

## Problema

### Situación Actual

| Aspecto | Estado Actual | Problema |
|---------|---------------|----------|
| **Velocidad** | 2-4 segundos carga | PageSpeed 40-60/100, mal SEO |
| **Seguridad** | WordPress público | Vulnerable a ataques |
| **Productividad** | 2-3 días por landing | Dependencia de herramientas externas |
| **Escalabilidad** | Idiomas mezclados | Añadir mercados es complejo |
| **Desarrollo** | Limitado por builders | Sin control total del código |

### Dolor Principal

> "Crear landing pages tarda días, la web es lenta, y dependemos de herramientas externas (V0, Lovable) sin control del código."

---

## Solución

**WordPress Headless + Astro:**

```
ANTES:                          DESPUÉS:
WordPress hace TODO             WordPress = Solo contenido (oculto)
├── Lento (2-4s)                Astro = Solo presentación (público)
├── Vulnerable                  ├── Ultrarrápido (<0.5s)
├── Limitado                    ├── Seguro (WP oculto)
└── Difícil escalar             ├── Flexible (código propio)
                                └── Escalable (Multisite)
```

---

## Objetivos Q1 2026

| Objetivo | Métrica | Target |
|----------|---------|--------|
| **Velocidad** | PageSpeed Score | 95-100/100 |
| **Carga** | Tiempo primera carga | <0.5 segundos |
| **SEO** | Core Web Vitals | Todos en verde |
| **Productividad** | Tiempo crear landing | 2-4 horas |
| **Seguridad** | WordPress público | NO (oculto en admin.dominio.com) |

---

## Scope

### Incluido

- Migración a WordPress Multisite (ES, EN, FR, IT)
- Frontend Astro en Vercel
- Tema base Sequence personalizado
- Integración GraphQL (WPGraphQL)
- Deploy automático (Vercel)
- Componentes reutilizables (React + Tailwind)
- Desarrollo con Cursor AI

### Excluido

- Integración CRM avanzada
- Analytics personalizados
- E-commerce
- **Nota:** "Creador de páginas para clientes" (mencionado por Antonio) es OTRO proyecto separado

---

## Stakeholders

| Nombre | Rol | Responsabilidad |
|--------|-----|-----------------|
| **Miguel** | Owner (100%) | Desarrollo, documentación, deploy, contenido EN |
| **Carlos** | Contenido FR | Revisión contenido Francia |
| **Javi Guardado** | Consultas | Solo consultas puntuales (infra, estructura) |

---

## Timeline (Proyecto Largo - Fases Incrementales)

| Fase | Entregable | Estado |
|------|------------|--------|
| **INTERVIEW** | Decisiones validadas | ✅ Completado |
| **SETUP** | WP Multisite + Astro + Vercel | ⏳ Próximo |
| **FASE 1: Francia** | qamarero.fr migrado (prueba) | ⏳ Pendiente |
| **FASE 2: Todo** | ES, EN, IT migrados | ⏳ Pendiente |
| **LAUNCH** | DNS apuntando a Vercel | ⏳ Pendiente |

**Estrategia:** Francia primero (qamarero.fr - dominio separado) como prueba, luego todo de golpe.

---

## Dependencias

| Dependencia | De quién | Estado |
|-------------|----------|--------|
| Acceso Cloudways | Miguel | ✅ Tiene |
| Cuenta Vercel | Miguel | ✅ Tiene |
| Aprobación scope | Antonio | ⏳ Pendiente kickoff |
| Contenido idiomas | Equipo contenido | ⏳ Post-launch |

---

## Riesgos Principales

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Contenido no migra bien | Media | Alto | Migración incremental |
| SEO afectado temporalmente | Baja | Alto | Redirects 301, Schema SEO |
| Curva aprendizaje equipo | Media | Medio | Documentación + training |

---

## Definition of Done

- [ ] PageSpeed Score ≥95/100
- [ ] Tiempo carga <0.5s
- [ ] Core Web Vitals en verde
- [ ] WordPress no accesible públicamente
- [ ] Deploy automático funcionando
- [ ] Documentación completa

---

**Preparado por:** Miguel Ortiz Peralta
**Fecha:** 23 Enero 2026
**Versión:** 1.0
