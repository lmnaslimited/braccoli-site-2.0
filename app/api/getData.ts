// Caching utility to fetch and memoize GraphQL data from Strapi using Next.js' `unstable_cache`.
// This function wraps the `fetchFromStrapi` call and caches the response per query name.


import { unstable_cache } from 'next/cache'
import type { TQueryName } from '@repo/ui/api/query'
import { fnFetchFromStrapi } from '@repo/ui/utils/fetchGraphgl'

const cacheMap = new Map<string, ReturnType<typeof unstable_cache>>()

export async function fnGetData<T>(iQueryName: TQueryName): Promise<T> {
    
  if (!cacheMap.has(iQueryName)) {
    const fetcher = unstable_cache(
      async () => {
        const data = await fnFetchFromStrapi<T>({ iQuery: iQueryName })
        return data
      },
      [iQueryName],

      // - Caches query result with revalidation every 7200 seconds.
      { revalidate: 7200, tags: [iQueryName] }
    )
    cacheMap.set(iQueryName, fetcher)
  }
  return await cacheMap.get(iQueryName)!()
}