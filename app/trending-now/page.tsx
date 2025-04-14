import { getData } from "../api/getData";
import TrendingChildPage from "./trend"
import { Ttrend } from "@repo/ui/type";

export default async function TrendingNowPage() {
  const idTrend = await getData<Ttrend>("trend")
  return (
    <TrendingChildPage idTrend={idTrend} />
  )

}