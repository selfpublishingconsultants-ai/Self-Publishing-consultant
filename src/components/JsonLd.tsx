/**
 * Reusable JSON-LD schema injector.
 * Renders structured data as an inline <script type="application/ld+json"> tag.
 * Safe for use in both Server and Client Components.
 */
export function JsonLd({ schema }: { schema: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: intentional structured data injection
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}
