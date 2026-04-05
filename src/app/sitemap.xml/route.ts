// src/app/sitemap.xml/route.ts

export async function GET() {
    const baseUrl = 'https://www.kinemo.de';
  
    const staticRoutes = [
      '/',
      '/leistungen',
      '/branchen',
      '/anwendungsfaelle',
      '/technologie',
      '/referenzen',
      '/blog',
      '/blog/was-ist-industrielle-ct',
      '/blog/fehler-entwicklungsphase-kosten',
      '/blog/lunkererkennung-gussteile',
      '/blog/ct-vs-roentgen',
      '/kontakt',
      '/termin-buchen',
      '/impressum',
      '/datenschutz',
    ];
  
    const today = new Date().toISOString().split('T')[0];

    const priorityMap: Record<string, string> = {
      '/': '1.0',
      '/leistungen': '0.9',
      '/anwendungsfaelle': '0.9',
      '/branchen': '0.8',
      '/technologie': '0.8',
      '/referenzen': '0.8',
      '/kontakt': '0.8',
      '/termin-buchen': '0.8',
      '/blog': '0.7',
    };

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes
      .map(
        (route) => `  <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${today}</lastmod>
      <priority>${priorityMap[route] ?? '0.6'}</priority>
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
  