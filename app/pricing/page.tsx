import { clTransformerFactory, Itransformer, TpricingPageSource, TpricingPageTarget } from "@repo/middleware";
import Pricing from "./pricing";

export default async function PricingPage() {
  const ioTransformer: Itransformer<TpricingPageSource, TpricingPageTarget> = clTransformerFactory.createTransformer("Pricing");
  const pageData: TpricingPageTarget = await ioTransformer.execute({ locale: 'de-DE' });

  return <Pricing idPricing={pageData} />
}
