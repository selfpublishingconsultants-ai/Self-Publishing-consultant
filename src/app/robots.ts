import { MetadataRoute } from "next";

/**
 * Robots.txt Generator
 *
 * Configures Search Engine crawler permissions and points clearly
 * to the dynamic sitemap. Essential for Technical SEO.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://selfpublishingconsultant.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
