import ProductsComp from "../products";
import { clTransformerFactory, IQuery, ITransformer, Tcontext, TproductsPageTarget, TslugsSource, TslugsTarget } from "@repo/middleware";
import { clQuerySlug } from "../../../../../../packages/middleware/src/api/query";
import { clSlugsTransformer } from "../../../../../../packages/middleware/src/engine/transformer";
import { fnGetCacheData } from "../../../api/getData";

export async function generateStaticParams({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const ioQuery: IQuery<TslugsSource> = new clQuerySlug('products');
  const ioTransformer: ITransformer<TslugsSource, TslugsTarget> = new clSlugsTransformer('products', ioQuery);
  const slugs: TslugsTarget = await ioTransformer.execute({ locale: locale });

  return slugs.map((islug) => ({
    slug: islug.slug,
  }))
}

export default async function Products({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  const context: Tcontext = {
    locale: locale,
    filters: {
      slug: {
        eq: slug,
      },
    },
  };

  const pageData: TproductsPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('products')
  );
  return (
    <ProductsComp idProduct={pageData.products[0]!} />
  );
}