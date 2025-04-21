// src/app/sitemap.xml/route.ts

export async function GET() {
    const baseUrl = 'https://www.kinemo.de';
  
    const staticRoutes = [
      '/',
      '/about',
      '/services',
      '/services/x-ray-in-motion',
      '/services/dynamic-ct',
      '/services/validate-hypotheses',
      '/services/error-analysis',
      '/solutions',
      '/solutions/automotive',
      '/solutions/aerospace',
      '/solutions/mechanical-engineering',
      '/case-studies',
      '/blog',
      '/resources',
      '/resources/whitepapers',
      '/resources/webinars',
      '/resources/downloads',
      '/contact',
      '/faq',
      '/impressum',
      '/datenschutz'
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes
      .map(
        (route) => `  <url>
      <loc>${baseUrl}${route}</loc>
    </url>`
      )
      .join('\n')}
  </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
  