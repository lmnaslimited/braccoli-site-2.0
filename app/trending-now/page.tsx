import { TtrendsPageSource } from "@repo/middleware/src/types/typesSource";
import TrendingNowPage from "./trending-now";
import { clQueryTrends } from  "@repo/middleware/src/api/trends"


export default async function TrendingPage() {
  // const trends = await clQueryTrends.getInstance().executeQuery();
  // const { trend } = trends;
  // const { heroSection } = trend;
  // const { heading, description, buttons } = heroSection;

  const queryInstance = new clQueryTrends();
  const pageData = await queryInstance.executeQuery();
  return (
    <TrendingNowPage idTrend={pageData as TtrendsPageSource}/>
  );
}