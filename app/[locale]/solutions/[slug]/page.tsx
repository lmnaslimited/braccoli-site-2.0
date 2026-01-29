
import CaseStudyPage from "./casestudy";
import { fnGetCacheData } from '../../../utils/strapi/get-data'
import { clQuerySlug } from "../../../../../../packages/middleware/src/api/query";
import { clSlugsTransformer } from "../../../../../../packages/middleware/src/engine/transformer";
import { clTransformerFactory } from "@repo/middleware";
import { IQuery, ITransformer, TcaseStudiesPageTarget, Tcontext, TslugsSource, TslugsTarget } from "@repo/middleware/types";

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