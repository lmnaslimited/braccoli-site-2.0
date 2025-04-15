// import { unstable_cache } from 'next/cache'
// import { fetchFromStrapi } from "@repo/ui/utils/fetchGrapgql";
// import type { QueryName } from '@repo/ui/api/query'

// const cacheMap = new Map<string, ReturnType<typeof unstable_cache>>()

// export async function getData<T>(queryName: QueryName): Promise<T> {
//   if (!cacheMap.has(queryName)) {
//     const fetcher = unstable_cache(
//       async () => {
//         const data = await fetchFromStrapi<T>({ query: queryName })
//         return data;
//       },
//       [queryName],
//       { revalidate: 120, tags: [queryName] }
//     )
//     cacheMap.set(queryName, fetcher)
//   }

//   return await cacheMap.get(queryName)!()

// }

// lib/getData.ts
import { unstable_cache } from 'next/cache';
import { fetchFromStrapi } from "@repo/ui/utils/fetchGrapgql";
import type { QueryName } from '@repo/ui/api/query';

const cacheMap = new Map<string, ReturnType<typeof unstable_cache>>();

export async function getData<T>(queryName: QueryName, locale: string): Promise<T> {
  const cacheKey = `${queryName}-${locale}`;

  if (!cacheMap.has(cacheKey)) {
    const fetcher = unstable_cache(
      async () => {
        const data = await fetchFromStrapi<T>({
          query: queryName,
          locale,
        });
        return data;
      },
      [cacheKey],
      {
        revalidate: 120,
        tags: [queryName, locale],
      }
    );

    cacheMap.set(cacheKey, fetcher);
  }

  return await cacheMap.get(cacheKey)!();
}
