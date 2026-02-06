# Analisis Web 2025 - Metricas Reales

> Datos ajustados x1.7 por consentimiento/cookies

---

## 1. Trafico Global (Ajustado x1.7)

| Metrica | Raw Clarity | Ajustado | Contexto |
|---------|-------------|----------|----------|
| Sesiones 2025 | 656,700 | **1,116,390** | 93,000/mes |
| Usuarios unicos | 530,032 | **901,054** | 75,000/mes |
| Page Views | 948,118 | **1,611,800** | - |
| Paginas/sesion | 1.44 | 1.44 | Bajo (benchmark: 2.5+) |
| Duracion media | 3.5 min | 3.5 min | OK |

### Por Fuente

| Canal | Sesiones | % | Insight |
|-------|----------|---|---------|
| Organico | 913,549 | 76.5% | SEO funciona |
| Directo | 245,256 | 20.5% | Marca conocida |
| Referral | 32,104 | 2.7% | Oportunidad |
| Paid | 2,734 | 0.2% | Casi no invertimos |

---

## 2. Performance (CRITICO)

| Metrica | Actual | Benchmark | Target Astro | Impacto |
|---------|--------|-----------|--------------|---------|
| Page Load Time | **6.5s** | <3s | <0.5s | Cada +1s = -7% CR |
| Performance Score | **76/100** | 80+ | 95+ | SEO + UX |

### Calculo Impacto Velocidad

- 6.5s vs 0.5s = ~6 segundos extra
- 6 x 7% = **~42% de conversiones perdidas por velocidad**

---

## 3. Funnels de Conversion

### 3.1 Funnel Principal: Web -> Demo -> Form

| Paso | Sesiones | % del anterior | % del total |
|------|----------|----------------|-------------|
| Sesiones Web (total) | 1,116,390 | - | 100% |
| Visitas /demo | 11,377 | 1.02% | **1.02%** |
| Forms completados | 1,798 | 15.8% de demo | **0.16%** |

**CR Funnel Principal:**
- **CR Web -> Demo: 1.02%** (benchmark SaaS: 3-5%)
- **CR Demo -> Form: 15.8%** (benchmark: 20-30%)
- **CR Global: 0.16%** (benchmark: 0.5-1%)

---

### 3.2 Funnels por Entrada

| Pagina Entrada | Sesiones | -> Demo | CR a Demo | Insight |
|----------------|----------|---------|-----------|---------|
| **Blog** | 997,726 | 1,819 | **0.18%** | Trafico alto, conversion minima |
| **Home** | 103,010 | - | - | Punto de entrada clave |
| **Kit Digital** | 82,147 | 1,537 | **1.87%** | Mejor CR |
| **Precio** | 14,820 | - | - | Alta intencion |

**Insight Blog:**
El 89% del trafico entra por blog, pero solo 0.18% va a demo. **Hay un problema masivo de CTAs en el blog.**

---

### 3.3 Funnel Kit Digital

| Paso | Sesiones | % anterior | % total |
|------|----------|------------|---------|
| Visitas /kit-digital | 82,147 | - | 100% |
| -> /demo | 1,537 | 1.87% | 1.87% |
| -> Form KD | 1,178 | 1.43% | 1.43% |

**Problema:** Scroll depth de /kit-digital es **13.23%**. Los usuarios no ven el contenido.

---

### 3.4 Funnel Precio

| Paso | Sesiones | % anterior |
|------|----------|------------|
| Visitas /precio | 14,820 | 100% |
| -> Continuan navegando | ~5,500 | 37% |
| Exit en /precio | - | **63%** |

**Problema:** 63% sale directamente de /precio sin hacer nada.

---

## 4. Puntos de Contacto Alternativos

| Canal | Sesiones/Eventos | % del trafico | Insight |
|-------|------------------|---------------|---------|
| **Clic Demo (boton)** | 3,900 | 0.35% | CTA principal |
| **Clic Demo o Telefono** | 2,497 | 0.22% | Hibrido |
| **WhatsApp clicks** | 6,973 | 0.62% | Mas que Demo |
| **Telefono clicks** | 262 | 0.02% | Muy bajo |
| **ContactUs eventos** | 2,171 | 0.19% | Formulario contacto |
| **Checkout eventos** | 824 | 0.07% | Stripe/compra directa |
| **OutboundClick** | 12,650 | 1.13% | Salen a otros sitios |

**Insight WhatsApp:**
WhatsApp tiene mas clicks que el boton Demo. Los usuarios prefieren contacto directo.

---

## 5. Comportamiento por Pagina

### 5.1 Scroll Depth (% de pagina vista)

| Pagina | Scroll Depth | Benchmark | Status |
|--------|--------------|-----------|--------|
| /demo | 50.2% | >70% | Medio |
| /precio | 54.0% | >70% | Medio |
| Home | 36.9% | >60% | Bajo |
| /kit-digital | **13.2%** | >60% | Critico |
| Blog (media) | ~37% | >50% | Bajo |

**Problema /kit-digital:**
La pagina mas visitada (62K views) tiene el peor scroll. Los usuarios abandonan casi inmediatamente.

---

### 5.2 Exit Rate (% que sale desde esa pagina)

| Pagina | Exit Rate | Benchmark | Status |
|--------|-----------|-----------|--------|
| /demo | 58.2% | <40% | Alto |
| /precio | 62.9% | <40% | Alto |

**Problema:**
Las paginas de conversion tienen exit rates muy altos. Los usuarios llegan y se van.

---

## 6. Engagement

| Metrica | Valor | % del trafico | Insight |
|---------|-------|---------------|---------|
| Sesiones >3 paginas | 36,018 | **3.2%** | Solo 3% navega el sitio |
| Bounce Rate | 72.64% | - | 7/10 se van sin interactuar |
| Dead Clicks totales | 173,840 | 18.3% de PV | 1 de 5 paginas tiene clicks muertos |
| Dead Clicks en /demo | 219 | 1.9% de /demo PV | Relativamente OK |

---

## 7. Smart Events Resumen

| Evento | Count | % de sesiones | Tipo |
|--------|-------|---------------|------|
| OutboundClick | 21,556 | 1.93% | Salen del sitio |
| Clic en Demo | 3,900 | 0.35% | CTA principal |
| ContactUs | 3,041 | 0.27% | Contacto |
| Click Demo o Numero | 2,497 | 0.22% | Hibrido |
| SubmitForm | 1,798 | 0.16% | Conversion |
| Demo ITA | 1,070 | 0.10% | Italia |
| Clic en KD Form | 812 | 0.07% | Kit Digital |
| Checkout | 645 | 0.06% | Compra |

---

## 8. Analisis de Oportunidades

### 8.1 Donde Perdemos Conversiones

| Problema | Impacto | Sesiones afectadas | Solucion |
|----------|---------|-------------------|----------|
| Blog no convierte | -0.18% CR | 997,726 | CTAs en blog |
| Velocidad (6.5s) | -42% CR estimado | Todas | Astro SSG |
| Scroll bajo | No ven propuesta | ~70% | Contenido above-the-fold |
| Exit alto en /precio | 63% abandonan | 14,820 | CTA claro, pricing mejor |
| Exit alto en /demo | 58% abandonan | 11,377 | Form mas corto, propuesta |

---

### 8.2 Calculo de Oportunidad

**Si mejoramos:**

| Metrica | Actual | Target | Leads extra/mes |
|---------|--------|--------|-----------------|
| CR Blog->Demo | 0.18% | 0.5% | +265 demos/mes |
| CR Web->Demo | 1.02% | 2% | +91 demos/mes |
| CR Demo->Form | 15.8% | 25% | +87 forms/mes |
| Velocidad -42% | 0.16% CR | 0.28% CR | +112 forms/mes |

**Oportunidad total estimada: +200-300 leads/mes**

---

## 9. Comparativa Astro

| Metrica | Actual | Post-Astro | Mejora | Impacto |
|---------|--------|------------|--------|---------|
| Page Load | 6.5s | <0.5s | -92% | +40% CR estimado |
| Bounce Rate | 72.64% | <50% | -31% | Mas engagement |
| Scroll Depth | 37% | >60% | +62% | Ven propuesta completa |
| Dead Clicks | 18.3% | <5% | -72% | Menos frustracion |
| CR Global | 0.16% | 0.40% | +150% | +~100 leads/mes |

---

## 10. Resumen Ejecutivo

### Top 5 Problemas

| # | Problema | Impacto | Prioridad |
|---|----------|---------|-----------|
| 1 | Velocidad 6.5s | -42% conversiones | P0 |
| 2 | Blog sin CTAs | 89% trafico, 0.18% CR | P0 |
| 3 | Exit rate alto en paginas conversion | 58-63% abandonan | P1 |
| 4 | Scroll bajo | No ven propuesta valor | P1 |
| 5 | /kit-digital scroll 13% | Pagina top, engagement 0 | P1 |

---

### Metricas Clave para Tracking Post-Migracion

| Metrica | Baseline 2025 | Target |
|---------|---------------|--------|
| Page Load | 6.5s | <0.5s |
| CR Web->Demo | 1.02% | 2% |
| CR Demo->Form | 15.8% | 25% |
| CR Global | 0.16% | 0.40% |
| Bounce Rate | 72.64% | <50% |
| Scroll Depth | 37% | >60% |
| WhatsApp clicks | 0.62% | Mantener |
| Sesiones/mes | 93,000 | Mantener |

---

**Fuente:** Microsoft Clarity
**Periodo:** 2025 completo
**Ultima actualizacion:** 3 Febrero 2026
