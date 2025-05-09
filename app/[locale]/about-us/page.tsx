import { clTransformerFactory, TaboutUsPageTarget, Tcontext } from "@repo/middleware";
import AboutUs from "./about-us";
import { fnGetCacheData } from "../../api/getData";


export default async function AboutUsPage({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;
  const context: Tcontext = { locale: locale }

  const pageData: TaboutUsPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('aboutUs')
  );
  return (
    <AboutUs idAboutUs={pageData}/>
  );
}