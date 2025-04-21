import { fnGetData } from "../api/getData";
import PricingChildPage from "./pricing"
import { Tpricing } from "@repo/ui/type";

export default async function PricingPage() {
  const idPricing = await fnGetData<Tpricing>("pricing")
  console.log(idPricing)
  return (
    <PricingChildPage idPricing={idPricing} />
  )

}