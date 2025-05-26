import { clTransformerFactory, Tcontext, TsolutionPageTarget } from "@repo/middleware";
import { fnGetCacheData } from "../../api/getData";
import Solution from "./solution";

export default async function SolutionPage({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;
  const context: Tcontext = {
    locale: locale,
    caseStudiesLocale2: locale,
  };
  const pageData: TsolutionPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer("solution")
  );
  return <Solution idSolution={pageData} />
}
