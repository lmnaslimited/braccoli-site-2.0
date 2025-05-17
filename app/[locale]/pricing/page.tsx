import { clTransformerFactory, TcaseStudiesPageTarget, Tcontext, TpricingPageTarget } from "@repo/middleware";

import Pricing from "./pricing";
import { fnGetCacheData } from "../../api/getData";

export default async function PricingPage({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;

  const PricingContext: Tcontext = {
      locale: locale,
      filters: {
        slug: {
          eq: "erp-comparison-lens",
        },
      },
    };
  
    const PricingPageData: TcaseStudiesPageTarget = await fnGetCacheData(
      PricingContext,
      clTransformerFactory.createTransformer('caseStudies')
    );

  const context: Tcontext = { locale: locale }
  const pageData: TpricingPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer("pricing")
  );
  return <Pricing idPricing={pageData} idcaseStudies={PricingPageData} />;
}
