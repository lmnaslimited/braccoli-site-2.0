import { clTransformerFactory, Tcontext, TpricingPageTarget } from "@repo/middleware";

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
  const context: Tcontext = { locale: locale }
  const pageData: TpricingPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer("pricing")
  );
  return <Pricing idPricing={pageData} />
}
