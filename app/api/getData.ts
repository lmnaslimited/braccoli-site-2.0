import { unstable_cache } from 'next/cache';
import type { QueryName } from '@repo/ui/utils/query';
import { fnFetchFromStrapi } from '@repo/ui/api/fetchGraphql';

const LdCacheMap = new Map<string, ReturnType<typeof unstable_cache>>();

export async function fnGetData<T>(iQueryName: QueryName, iLocale: string): Promise<T> {
  const LCacheKey = `${iQueryName}-${iLocale}`;

  if (!LdCacheMap.has(LCacheKey)) {
    const fnCachedFetcher = unstable_cache(
      async () => {
        const LData = await fnFetchFromStrapi<T>({
          query: iQueryName,
          locale: iLocale,
        });
        return LData;
      },
      [LCacheKey],
      {
        revalidate: 120,
        tags: [iQueryName, iLocale],
      }
    );

    LdCacheMap.set(LCacheKey, fnCachedFetcher);
  }

  return await LdCacheMap.get(LCacheKey)!();
}
