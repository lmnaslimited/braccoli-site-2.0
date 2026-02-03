import { ITransformer, Tcontext } from "@repo/middleware/types";
import { unstable_cache } from "next/cache";

const LdCacheMap = new Map<string, ReturnType<typeof unstable_cache>>();
export async function fnGetCacheData<DynamicSourceType, DynamicTargetType>(
  iContext: Tcontext,
  transformer: ITransformer<DynamicSourceType, DynamicTargetType>,
) {
  const locale = iContext?.locale ?? "en";

  const status = iContext?.status ?? "published";

  let slug: string | undefined;
  if (iContext?.filters?.slug?.eq) {
    slug = iContext.filters.slug.eq;
  }

  // Add the new filter conditionally
  if (slug && ["manufacturing", "retail", "distribution"].includes(slug)) {
    (iContext as Tcontext)["caseStudiesFilters2"] = {
      heroSection: {
        tag: {
          eq: slug,
        },
      },
    };
  }

  const LCacheKey = slug
    ? `${transformer.contentType}-${locale}-${slug}-${status}`
    : `${transformer.contentType}-${locale}-${status}`;

  if (!LdCacheMap.has(LCacheKey)) {
    const fetcher = unstable_cache(
      async () => {
        const pageData: DynamicTargetType = await transformer.execute(iContext);
        return pageData;
      },
      [LCacheKey],
      {
        revalidate: 10,
        tags: slug ? [LCacheKey, locale, slug] : [LCacheKey, locale],
      },
    );
    LdCacheMap.set(LCacheKey, fetcher);
  }

  return await LdCacheMap.get(LCacheKey)!();
}
