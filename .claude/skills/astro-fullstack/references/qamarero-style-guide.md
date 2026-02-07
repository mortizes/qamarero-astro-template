# Qamarero Style Guide for Astro

> Brand guidelines, colors, typography, and component patterns for Qamarero projects.

## Brand Colors

### Primary Palette

```css
:root {
  /* Primary - Coral/Orange */
  --color-primary-50: #fff5f2;
  --color-primary-100: #ffe8e0;
  --color-primary-200: #ffd4c7;
  --color-primary-300: #ffb39e;
  --color-primary-400: #ff8a6a;
  --color-primary-500: #ff6b3d;  /* Main brand color */
  --color-primary-600: #f04d22;
  --color-primary-700: #c93c18;
  --color-primary-800: #a33318;
  --color-primary-900: #862f19;

  /* Secondary - Dark Blue/Navy */
  --color-secondary-50: #f4f6f9;
  --color-secondary-100: #e9edf3;
  --color-secondary-200: #d3dbe7;
  --color-secondary-300: #b0bed4;
  --color-secondary-400: #879abd;
  --color-secondary-500: #6a7ea6;
  --color-secondary-600: #56668c;
  --color-secondary-700: #475572;
  --color-secondary-800: #3d475f;
  --color-secondary-900: #1a1f2e;  /* Main dark color */
}
```

### Semantic Colors

```css
:root {
  /* Success */
  --color-success: #22c55e;
  --color-success-light: #dcfce7;

  /* Warning */
  --color-warning: #f59e0b;
  --color-warning-light: #fef3c7;

  /* Error */
  --color-error: #ef4444;
  --color-error-light: #fee2e2;
}
```

## Typography

### Font Families

```css
:root {
  --font-heading: 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### Type Scale

```css
:root {
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
}
```

## Spacing System

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
}
```

## Tailwind Configuration

```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5f2',
          100: '#ffe8e0',
          200: '#ffd4c7',
          300: '#ffb39e',
          400: '#ff8a6a',
          500: '#ff6b3d',
          600: '#f04d22',
          700: '#c93c18',
          800: '#a33318',
          900: '#862f19',
        },
        secondary: {
          50: '#f4f6f9',
          100: '#e9edf3',
          200: '#d3dbe7',
          300: '#b0bed4',
          400: '#879abd',
          500: '#6a7ea6',
          600: '#56668c',
          700: '#475572',
          800: '#3d475f',
          900: '#1a1f2e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
```

## Component Patterns

### Button

```astro
<a
  href="/contacto"
  class="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
>
  Contactar
</a>
```

### Card de Producto

```astro
<article class="rounded-2xl border border-border bg-card p-6">
  <h3 class="text-xl font-bold">{nombre}</h3>
  <p class="text-3xl font-bold text-primary">{precio}€</p>
  <p class="text-xs text-muted-foreground">+ IVA</p>
</article>
```

### Badge

```astro
<span class="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
  Popular
</span>
```

## Logo Usage

```astro
<!-- Logo con soporte dark mode -->
<img
  src="/qamarero-logo.svg"
  alt="Qamarero"
  class="h-8 w-auto dark:invert"
/>
```

## Best Practices

### ✅ DO

- Use CSS variables for colors
- Follow the type scale
- Use semantic color names
- Keep component styles scoped
- Use Tailwind utilities

### ❌ DON'T

- Hardcode color values
- Use arbitrary spacing
- Mix font families
- Override brand colors
- Use inline styles for brand elements
