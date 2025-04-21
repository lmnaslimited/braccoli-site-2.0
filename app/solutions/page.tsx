import { clTransformerFactory, ITransformer, TsolutionsPageSource, TsolutionsPageTarget } from "@repo/middleware";
import Solutions from "./solutions";

export default async function SolutionPage() {
  const ioTransformer: ITransformer<TsolutionsPageSource, TsolutionsPageTarget> = clTransformerFactory.createTransformer("Solutions");
  const pageData: TsolutionsPageTarget = await ioTransformer.execute({ locale: 'de-DE' });
  console.log("Solutions", pageData)
  return <Solutions idSolutions={pageData} />
}
