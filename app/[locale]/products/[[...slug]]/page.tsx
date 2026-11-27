import type { Metadata } from 'next';
import ProductsComp from "../products";
import { fnGetCacheData } from '../../../utils/strapi/get-data';
import { getPageMetadata } from '../../../utils/metadata/page-metadata';
import { fnGetStatus } from '../../../utils/strapi/get-status';
import { clQuerySlug } from "../../../../../../packages/middleware/src/api/query";
import { clSlugsTransformer } from "../../../../../../packages/middleware/src/engine/transformer";
import { clTransformerFactory } from "@repo/middleware";

import {
  IQuery,
  ITransformer,
  Tcontext,
  TproductsPageTarget,
  TslugsSource,
  TslugsTarget,
} from "@repo/middleware/types";

type ProductPageProps = {
  params: Promise<{
    locale: string;
    slug?: string[];
  }>;
};

type ProductSector = "generic" | "transformers" | "food-processing";

type ProductRoute = {
  slug: string;
  sector: ProductSector;
};

// Identify the product route and its sector
function getProductRoute(
  slugSegments: string[] = []
): ProductRoute | null {

  const first = slugSegments[0];
  const second = slugSegments[1];

  // Generic: /products/cpq-cloud
  if (slugSegments.length === 1 && first) {
    return {
      slug: first,
      sector: "generic",
    };
  }

  // Sector-specific: /products/transformers/cpq-cloud
  if (
    slugSegments.length === 2 &&
    first &&
    second &&
    (first === "transformers" || first === "food-processing")
  ) {
    return {
      slug: second,
      sector: first,
    };
  }

  return null;
}

// Generate static product routes
export async function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  const ioQuery: IQuery<TslugsSource> =
    new clQuerySlug('products', true);

  const ioTransformer: ITransformer<TslugsSource, TslugsTarget> =
    new clSlugsTransformer('products', ioQuery);

  const slugs: TslugsTarget = await ioTransformer.execute({ locale });
  console.log("PRODUCT SLUGS:", slugs);

  return slugs.map((item) => ({
    slug:
      item.sector === "generic"
        ? [item.slug]
        : [item.sector ?? "generic", item.slug],
  }));
}

// Fetch product page data
async function getProductsPageData({
  slug,
  sector,
  locale,
  status,
}: {
  slug: string;
  sector: ProductSector;
  locale: string;
  status?: string;
}) {
  const context: Tcontext = {
    locale,
    status,
    filters: {
      slug: {
        eq: slug,
      },
      sector: {
        eq: sector,
      },
    },
  };

  const pageData: TproductsPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('products')
  );

  return pageData;
}

// Generate metadata
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {

  const { slug: slugSegments = [], locale } = await params;

  const route = getProductRoute(slugSegments);

  if (!route) {
    throw new Error("Invalid product route");
  }

  const LStatus = await fnGetStatus();

  const pageData = await getProductsPageData({
    slug: route.slug,
    sector: route.sector,
    locale,
    status: LStatus,
  });

  if (!pageData?.products?.[0]?.metaData) {
    throw new Error(`Metadata not found for product: ${route.slug}`);
  }

  return getPageMetadata(pageData.products[0].metaData);
}

// Product page
export default async function Products({
  params,
}: ProductPageProps) {

  const { slug: slugSegments = [], locale } = await params;

  const route = getProductRoute(slugSegments);

  if (!route) {
    throw new Error("Invalid product route");
  }

  const LStatus = await fnGetStatus();

  const pageData = await getProductsPageData({
    slug: route.slug,
    sector: route.sector,
    locale,
    status: LStatus,
  });

  const product = pageData?.products?.[0];

  if (!product) {
    throw new Error(
      `Product not found: ${route.slug} (${route.sector})`
    );
  }

  const jsonLd = product.metaData?.schemaData;

  return (
    <>
      <ProductsComp idProduct={product} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd, null, 2).replace(/</g, '\\u003c'),
          }}
        />
      )}
    </>
  );
}