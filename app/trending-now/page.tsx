import { fnGetData } from "../api/getData";
import TrendingChildPage from "./trend"
import { Ttrend } from "@repo/ui/type";

export default async function TrendingNowPage() {
  const idTrend = await fnGetData<Ttrend>("trend", "en")
  console.log(idTrend)
  return (
    <TrendingChildPage idTrend={idTrend} />
  )

}