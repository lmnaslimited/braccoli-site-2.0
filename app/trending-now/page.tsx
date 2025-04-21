import { TtrendsPageSource, clTransformerFactory, Itransformer, TtrendsPageTarget } from '@repo/middleware'
import TrendingNowPage from "./trending-now";
export default async function TrendingPage() {
  const ioTransformer: Itransformer<TtrendsPageSource, TtrendsPageTarget> = clTransformerFactory.createTransformer("Trends");
  const pageData: TtrendsPageTarget = await ioTransformer.execute({ locale: 'de-DE' });
  return (
    <TrendingNowPage idTrend={pageData} />
  );
}