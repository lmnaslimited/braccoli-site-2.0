import { IQuery, ITransformer, TcaseStudiesPageTarget, Tcontext, TslugsSource, TslugsTarget } from "@repo/middleware/type";
import { clQuerySlug } from "../../../../../../packages/middleware/src/api/query";
import { clSlugsTransformer } from "../../../../../../packages/middleware/src/engine/transformer";
import { fnGetCacheData } from "@app/lib/strapi/get-data";
import CaseStudyPage from "./casestudy";
import { clTransformerFactory } from "@repo/middleware";

export async function generateStaticParams({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const ioQuery: IQuery<TslugsSource> = new clQuerySlug('caseStudies');
  const ioTransformer: ITransformer<TslugsSource, TslugsTarget> = new clSlugsTransformer('caseStudies', ioQuery);
  const slugs: TslugsTarget = await ioTransformer.execute({ locale: locale });

  return slugs.map((islug) => ({
    slug: islug.slug,
  }))
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  const context: Tcontext = {
    locale: locale,
    footerLocale2: locale,
    filters: {
      slug: {
        eq: slug,
      },
    },
    caseStudiesFilters2: {
      slug: {
        ne: slug,
      },
    }
  };

  const pageData: TcaseStudiesPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('caseStudies')
  );
  return (
    <CaseStudyPage idcaseStudies={pageData} />
  );
}