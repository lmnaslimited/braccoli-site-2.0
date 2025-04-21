import { TtrendsPageSource, clTransformerFactory, ITransformer, TtrendsPageTarget } from '@repo/middleware'
import TrendingNowPage from "./trending-now";
export default async function TrendingPage() {
  const ioTransformer: ITransformer<TtrendsPageSource, TtrendsPageTarget> = clTransformerFactory.createTransformer("Trends");
  const pageData: TtrendsPageTarget = await ioTransformer.execute({ locale: 'de-DE' });
  return (
    <TrendingNowPage idTrend={pageData} />
  );
}