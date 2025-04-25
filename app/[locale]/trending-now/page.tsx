import {
  clTransformerFactory,
  TtrendsPageTarget,
} from "@repo/middleware";
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
  const pageData: TtrendsPageTarget = await fnGetCacheData(
    locale,
    clTransformerFactory.createTransformer("trend")
  );
  return <TrendingNowPage idTrend={pageData} />;
}
