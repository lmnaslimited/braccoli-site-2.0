import { clQuerySlug } from "../../../../../../packages/middleware/src/api/query";
import { clSlugsTransformer } from "../../../../../../packages/middleware/src/engine/transformer";
import { fnGetCacheData } from "../../../api/getData";
import IndustryComp from "../industry";
import { clTransformerFactory, IQuery, ITransformer, Tcontext, TindustriesPageTarget, TslugsSource, TslugsTarget } from "@repo/middleware";

export async function generateStaticParams({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const ioQuery: IQuery<TslugsSource> = new clQuerySlug('industries');
  const ioTransformer: ITransformer<TslugsSource, TslugsTarget> = new clSlugsTransformer('industries', ioQuery);
  const slugs: TslugsTarget = await ioTransformer.execute({ locale: locale });

  return slugs.map((islug) => ({
    slug: islug.slug,
  }))
}

export default async function Industries({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;


  const context: Tcontext = {
    locale: locale,
    filters: {
      slug: {
        eq: slug,
      },
    },
    caseStudiesLocale2: locale,
    caseStudiesFilters2: {
      heroSection: {
        tag: {
          eq: slug,
        },
      },
    },
  };

  const pageData: TindustriesPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('industries')
  );
  return (
    <IndustryComp idIndustry={pageData} />
  );
}