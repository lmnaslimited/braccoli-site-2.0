// import { clTransformerFactory, TsolutionsPageTarget } from "@repo/middleware";
import Solutions from "./solutions";
// import { fnGetCacheData } from "../../api/getData";

export default async function SolutionPage({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;
  // const pageData: TsolutionsPageTarget = await fnGetCacheData(
  //   locale,
  //   clTransformerFactory.createTransformer("Solutions")
  // );


  return <Solutions />
}
