import { getJsonLd } from "@/lib/schema";

export function JsonLd() {
  const jsonLd = getJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
