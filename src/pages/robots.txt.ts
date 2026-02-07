/**
 * Dynamic robots.txt
 * Uses site URL from astro.config for absolute sitemap URL
 */

import type { APIRoute } from 'astro';
import { BASE_URL } from '@/i18n/config';

export const GET: APIRoute = async () => {
  const robotsTxt = `# Robots.txt for Qamarero
# ${BASE_URL}

User-agent: *
Allow: /

# Sitemap location
Sitemap: ${BASE_URL}/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
