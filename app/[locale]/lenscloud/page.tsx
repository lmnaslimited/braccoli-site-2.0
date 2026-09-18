import type { Metadata } from "next";
import LensCloud from "./lens-cloud";
import { fnGetLensCloudContent } from "./content";

// Generate metadata for the Lens Cloud launch page based on the locale-specific content. 
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const LdContent = fnGetLensCloudContent(locale);

  return {
    title: LdContent.metadata.title,
    description: LdContent.metadata.description,
  };
}
export default function LensCloudPage() {
  return <LensCloud />;
}
