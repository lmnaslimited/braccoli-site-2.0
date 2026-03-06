
import CaseStudyPage from "./casestudy";
import { fnGetCacheData } from '../../../lib/strapi/get-data'
import { fnGetStatus } from '../../../lib/strapi/get-status'
import { clQuerySlug } from "../../../../../../packages/middleware/src/api/query";
import { clSlugsTransformer } from "../../../../../../packages/middleware/src/engine/transformer";
import { clTransformerFactory } from "@repo/middleware";
import { IQuery, ITransformer, TcaseStudiesPageTarget, Tcontext, TslugsSource, TslugsTarget } from "@repo/middleware/types";

export async function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  const ioQuery: IQuery<TslugsSource> = new clQuerySlug('caseStudies');
  const ioTransformer: ITransformer<TslugsSource, TslugsTarget> =
    new clSlugsTransformer('caseStudies', ioQuery);

  const LdSlugs: TslugsTarget = await ioTransformer.fnExecute({ locale });

  return LdSlugs.map((islug) => ({
    slug: islug.slug,
    locale,
  }));
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const LStatus = await fnGetStatus()

  const LdContext: Tcontext = {
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
    },
    status: LStatus,
  };

  const pageData: TcaseStudiesPageTarget = await fnGetCacheData(
    LdContext,
    clTransformerFactory.fnCreateTransformer('caseStudies')
  );
  return (
    <CaseStudyPage idCaseStudies={pageData} />
  );
}