import { clTransformerFactory, Tcontext, TtrendsPageTarget, } from "@repo/middleware";
import TrendingNowPage from "./trending-now";
import { fnGetCacheData } from "../../api/getData";

export default async function TrendingPage({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;
  const context: Tcontext = { locale: locale }
  const pageData: TtrendsPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer("trend")
  );
  return <TrendingNowPage idTrend={pageData} />;
}
