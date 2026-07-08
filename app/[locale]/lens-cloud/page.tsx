import type { Metadata } from "next";
import { fnGetCacheData } from "../../utils/strapi/get-data";
import { clTransformerFactory } from "@repo/middleware";
import type { TaboutUsPageTarget, Tcontext } from "@repo/middleware/types";
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
  return <LensCloud launchDate={LdLaunchDate} />;
}
