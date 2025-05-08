import { ITransformer } from '@repo/middleware';
import { unstable_cache } from 'next/cache';

export type Tcontext = {
  locale: string
  filters?: {
    slug: {
      eq: string
    }
  }
  caseStudiesFilters2?: {
    heroSection: {
      tag: {
        eq: string
      }
    }
  }
}

const LdCacheMap = new Map<string, ReturnType<typeof unstable_cache>>();
export async function fnGetCacheData<DynamicSourceType, DynamicTargetType>(
  iContext: Tcontext,
  transformer: ITransformer<DynamicSourceType, DynamicTargetType>
) {
  const locale = iContext?.locale ?? 'en';

  let slug: string | undefined;
  if (iContext?.filters?.slug?.eq) {
    slug = iContext.filters.slug.eq;
  }

  // Add the new filter conditionally
  if (slug && ['manufacturing', 'retail', 'distribution'].includes(slug)) {
    (iContext as Tcontext)['caseStudiesFilters2'] = {
      heroSection: {
        tag: {
          eq: slug,
        },
      },
    };
  }

  const LCacheKey = slug ? `${transformer.contentType}-${locale}-${slug}` : `${transformer.contentType}-${locale}`;

  if (!LdCacheMap.has(LCacheKey)) {
    const fetcher = unstable_cache(
      async () => {
        const pageData: DynamicTargetType = await transformer.execute(iContext);
        return pageData;
      },
      [LCacheKey],
      { revalidate: 10, tags: slug ? [LCacheKey, locale, slug] : [LCacheKey, locale] }
    );
    LdCacheMap.set(LCacheKey, fetcher);
  }

  return await LdCacheMap.get(LCacheKey)!();
}
