import type { Metadata } from 'next'
import Events from './event'
import { fnGetCacheData } from '@app/lib/strapi/get-data'
import { getPageMetadata } from '@app/lib/metadata/page-metadata'
import { clTransformerFactory } from '@repo/middleware'
import { TeventPageTarget, Tcontext } from '@repo/middleware/type'

async function getEventsPageData(params: { locale: string }) {
    const { locale } = params
    const context: Tcontext = { locale: locale }
    const pageData: TeventPageTarget = await fnGetCacheData(
        context,
        clTransformerFactory.createTransformer('event')
    )
    return pageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const pageData = await getEventsPageData(await params)
    return getPageMetadata(pageData.event.metaData)
}

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
    const pageData = await getEventsPageData(await params)
    const jsonLd = pageData.event.metaData.schemaData
    return (
        <>
            <Events idEvent={pageData} />
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd, null, 2).replace(/</g, '\\u003c'),
                    }}
                />
            )}
        </>
    )
}