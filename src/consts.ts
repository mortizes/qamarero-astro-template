export const SITE_TITLE = "Qamarero - Software TPV para Hostelería";
export const SITE_DESCRIPTION =
  "Software de gestión para hostelería: TPV, comandero digital, carta QR, reservas, delivery y KDS. Todo incluido por 99€/mes.";

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE,
    template: "%s | Qamarero",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "TPV hostelería",
    "software restaurante",
    "comandero digital",
    "carta QR",
    "reservas restaurante",
    "delivery",
    "KDS cocina",
    "gestión hostelería",
  ],
  authors: [{ name: "Qamarero" }],
  creator: "Qamarero",
  publisher: "Qamarero",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Qamarero",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Qamarero - Software TPV para Hostelería",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
    creator: "@qamarero",
  },
};
