import {
  clTransformerFactory,
  TtrendsPageTarget,
} from "@repo/middleware";
import TrendingNowPage from "./trending-now";
import { fnGetCacheData } from "../../api/getData";

type Props = {
  params: {
    locale: string;
  };
};

export default async function TrendingPage({ params }: Props) {
  const { locale } = await params;
  const pageData: TtrendsPageTarget = await fnGetCacheData(
    locale,
    clTransformerFactory.createTransformer("trend")
  );
  return <TrendingNowPage idTrend={pageData} />;
}
