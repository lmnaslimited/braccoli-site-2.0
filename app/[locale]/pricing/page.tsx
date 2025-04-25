// import { clTransformerFactory, ITransformer, TpricingPageSource, TpricingPageTarget } from "@repo/middleware";
import { clTransformerFactory,TpricingPageTarget } from "@repo/middleware";

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
  const pageData: TpricingPageTarget = await fnGetCacheData(
    locale,
    clTransformerFactory.createTransformer("Pricing")
  );
  return <Pricing idPricing={pageData} />
}
