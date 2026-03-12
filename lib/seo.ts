import type { Metadata } from "next";
import { businessName, toAbsoluteUrl } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({ title, description, path }: MetadataInput): Metadata {
  const canonical = toAbsoluteUrl(path);
  const ogImage = toAbsoluteUrl("/images/og-default.svg");

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      siteName: businessName,
      url: canonical,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${businessName} Open Graph Image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

