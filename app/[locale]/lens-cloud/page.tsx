import type { Metadata } from "next";
import LensCloud from "./lens-cloud";
import { fnGetLensCloudContent } from "./content";

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
