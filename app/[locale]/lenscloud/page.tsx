import type { Metadata } from "next";
import { fnGetCacheData } from "../../utils/strapi/get-data";
import { clTransformerFactory } from "@repo/middleware";
import type { TaboutUsPageTarget, Tcontext } from "@repo/middleware/types";
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
// Fetch the launch date from the About Us page's hero section description field in Strapi. This is a temporary solution until we have a dedicated endpoint for the launch date.
async function fnGetLaunchDateFromAboutUs(params: { locale: string }) {
  const { locale } = params;
  const context: Tcontext = { locale, status: "PUBLISHED" };
  const pageData: TaboutUsPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer("aboutUs"),
  );
  return pageData.aboutUs.heroSection.description;
}

export default async function LensCloudPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const LdLaunchDate = await fnGetLaunchDateFromAboutUs(await params);
  // Render the LensCloud component with the resolved launch date. The launch date is passed as a prop to the LensCloud component, which will use it to display the countdown timer and other relevant information on the page.
  return <LensCloud launchDate={LdLaunchDate} />;
}
