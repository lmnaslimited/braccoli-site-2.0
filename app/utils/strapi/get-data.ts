import { ITransformer, Tcontext } from "@repo/middleware/types"
import { unstable_cache } from "next/cache"

const LdCacheMap = new Map<string, ReturnType<typeof unstable_cache>>()
export async function fnGetCacheData<DynamicSourceType, DynamicTargetType>(
  iContext: Tcontext,
  transformer: ITransformer<DynamicSourceType, DynamicTargetType>,
) {
  // Extract necessary values from the context with default fallbacks
  const LLocale = iContext?.locale ?? "en"
  const LStatus = iContext?.status ?? "PUBLISHED"
  const LSourceId = iContext?.filters?.sourceId?.eq

  let LSlug: string | undefined

  if (iContext?.filters?.slug?.eq) {
    LSlug = iContext.filters.slug.eq
  }

  // Add the new filter conditionally
  if (LSlug && ["manufacturing", "retail", "distribution"].includes(LSlug)) {
    ;(iContext as Tcontext)["caseStudiesFilters2"] = {
      heroSection: {
        tag: {
          eq: LSlug,
        },
      },
    }
  }

  // Construct the cache key based on the presence of slug and sourceId
  // Build a unique cache key based on:
  // - content type
  // - locale
  // - slug (optional)
  // - sourceId (optional)
  // - status

const LCacheKey = LSlug
  ? `${transformer.contentType}-${LLocale}-${LSlug}${LSourceId ? `-${LSourceId}` : ""}-${LStatus}`
  : `${transformer.contentType}-${LLocale}${LSourceId ? `-${LSourceId}` : ""}-${LStatus}`;

  // If cache entry does not exist, create and store it
  if (!LdCacheMap.has(LCacheKey)) {
    const fnFetcher = unstable_cache(
      async () => {
        const LdUpdatedContext = {
          ...iContext,
          status: LStatus,
        }
        const LaPageData: DynamicTargetType =
          await transformer.execute(LdUpdatedContext)

        return LaPageData
      },
      [LCacheKey],
      {
        revalidate: 3600, // revalidate every 1 hour
        tags: LSlug
          ? [LCacheKey, LLocale, LSlug, LStatus]
          : [LCacheKey, LLocale, LStatus],
      },
    )
    LdCacheMap.set(LCacheKey, fnFetcher)
  }

  return await LdCacheMap.get(LCacheKey)!()
}
