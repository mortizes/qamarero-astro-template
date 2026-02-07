/**
 * Spanish (ES) Common Translations
 * Shared UI text across all pages
 */

export const common = {
  nav: {
    features: 'Funcionalidades',
    pricing: 'Precios',
    integrations: 'Integraciones',
    blog: 'Blog',
    contact: 'Contacto',
    about: 'Nosotros',
    careers: 'Empleo',
    login: 'Iniciar sesion',
    signup: 'Registrarse',
    demo: 'Ver demo',
  },
  footer: {
    product: 'Producto',
    company: 'Empresa',
    legal: 'Legal',
    resources: 'Recursos',
    copyright: '2026 Qamarero. Todos los derechos reservados.',
    privacy: 'Privacidad',
    terms: 'Terminos',
    cookies: 'Cookies',
  },
  cta: {
    primary: 'Solicitar demo',
    secondary: 'Ver funcionalidades',
    contact: 'Contactar',
    learnMore: 'Saber mas',
    getStarted: 'Empezar',
    tryFree: 'Probar gratis',
  },
  meta: {
    siteTitle: 'Qamarero - Software TPV para Restaurantes',
    siteDescription:
      'Software de gestion todo en uno para hosteleria. TPV, comandero, carta QR, reservas, delivery, KDS. 99 euros/mes todo incluido.',
  },
  common: {
    loading: 'Cargando...',
    error: 'Error',
    success: 'Exito',
    cancel: 'Cancelar',
    save: 'Guardar',
    delete: 'Eliminar',
    edit: 'Editar',
    close: 'Cerrar',
    back: 'Volver',
    next: 'Siguiente',
    previous: 'Anterior',
    search: 'Buscar',
    filter: 'Filtrar',
    sort: 'Ordenar',
    noResults: 'Sin resultados',
  },
} as const;

export type CommonTranslations = typeof common;
