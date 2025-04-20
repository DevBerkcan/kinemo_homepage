
export function GET() {
    const robots = `User-agent: *
  Allow: /
  
  Sitemap: https://www.kinemo.de/sitemap.xml`;
  
    return new Response(robots, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }