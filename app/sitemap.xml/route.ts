import { siteRoutes, toAbsoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const lastmod = new Date().toISOString();
  const urls = siteRoutes
    .map(
      (route) => `<url>
  <loc>${toAbsoluteUrl(route.path)}</loc>
  <lastmod>${lastmod}</lastmod>
</url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
