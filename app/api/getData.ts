import { ITransformer } from '@repo/middleware';
import { unstable_cache } from 'next/cache';

const LdCacheMap = new Map<string, ReturnType<typeof unstable_cache>>();

export async function fnGetCacheData<DynamicSourceType, DynamicTargetType>(
  iContext: Record<string, any>,
  transformer: ITransformer<DynamicSourceType, DynamicTargetType>
) {
  const locale = iContext?.locale ?? 'en'
  const slug = iContext?.filters.slug.eq
  // const LCacheKey = `${transformer.contentType}-${locale}-${slug}`;
  const LCacheKey = slug ? `${transformer.contentType}-${locale}-${slug}` : `${transformer.contentType}-${locale}`;
  if (!LdCacheMap.has(LCacheKey)) {
    const fetcher = unstable_cache(
      async () => {
        const pageData: DynamicTargetType = await transformer.execute(iContext);
        return pageData;
      },
      [LCacheKey],
      { revalidate: 2, tags: [LCacheKey, locale, slug] }
    );
    LdCacheMap.set(LCacheKey, fetcher);
  }

  return await LdCacheMap.get(LCacheKey)!();
}