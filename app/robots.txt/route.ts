import { siteRoutes, toAbsoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const sitemapUrl = toAbsoluteUrl("/sitemap.xml");

  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${sitemapUrl}`,
    "",
    "# Included routes",
    ...siteRoutes.map((route) => `# ${toAbsoluteUrl(route.path)}`),
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
