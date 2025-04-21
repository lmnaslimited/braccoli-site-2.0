import { clTransformerFactory, Itransformer, TproductsPageSource, TproductsPageTarget } from "@repo/middleware";
import Products from "./products";

export default async function SolutionPage() {
    const ioTransformer: Itransformer<TproductsPageSource, TproductsPageTarget> = clTransformerFactory.createTransformer("Products");
    const pageData: TproductsPageTarget = await ioTransformer.execute({ locale: 'de-DE' });
    console.log("Solutions", pageData)
    return <Products idProducts={pageData} />
}
