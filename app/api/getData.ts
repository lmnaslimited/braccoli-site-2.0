import { ITransformer } from '@repo/middleware';
import { unstable_cache } from 'next/cache';

const LdCacheMap = new Map<string, ReturnType<typeof unstable_cache>>();

export async function fnGetCacheData<DynamicSourceType, DynamicTargetType>(
  ilocale: string,
  transformer: ITransformer<DynamicSourceType, DynamicTargetType>
) {
  const LCacheKey = `${transformer.contentType}-${ilocale}`;
  if (!LdCacheMap.has(LCacheKey)) {
    const fetcher = unstable_cache(
      async () => {
        console.log("Calling transformer.execute — not cached for ",LCacheKey);
        const pageData: DynamicTargetType = await transformer.execute({
          locale: ilocale,
        });
        return pageData;
      },
      [LCacheKey],
      { revalidate: 60, tags: ["posts"] }
    );
    LdCacheMap.set(LCacheKey, fetcher);
  }


  return await LdCacheMap.get(LCacheKey)!();
}