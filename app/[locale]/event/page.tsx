import type { Metadata } from 'next'
import Events from './event'
import { fnGetCacheData } from '../../lib/strapi/get-data'
import { getPageMetadata } from '../../lib/metadata/page-metadata'
import { fnGetStatus } from '../../lib/strapi/get-status'
import { clTransformerFactory } from '@repo/middleware'
import { Tcontext, TeventPageTarget } from '@repo/middleware/types'

async function fnGetEventsPageData(params: { locale: string }) {
    const { locale } = params
    const LStatus = await fnGetStatus()
    const LdContext: Tcontext = { locale: locale, status: LStatus }
    const LdPageData: TeventPageTarget = await fnGetCacheData(
        LdContext,
        clTransformerFactory.fnCreateTransformer('event')
    )
    return LdPageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const LdPageData = await fnGetEventsPageData(await params)
    return getPageMetadata(LdPageData.event.metaData)
}

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
    const LdPageData = await fnGetEventsPageData(await params)
    const jsonLd = LdPageData.event.metaData.schemaData
    return (
        <>
            <Events idEvent={LdPageData} />
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