import type { Metadata } from 'next'
import Contact from './contact'
import { fnGetCacheData } from '../../lib/strapi/get-data'
import { getPageMetadata } from '../../lib/metadata/page-metadata'
import { fnGetStatus } from '../../lib/strapi/get-status'
import { clTransformerFactory } from '@repo/middleware'
import { TcontactTarget, Tcontext } from '@repo/middleware/types'

async function fnGetContactPageData(params: { locale: string }) {
    const { locale } = params
    const LStatus = await fnGetStatus()
    const LdContext: Tcontext = { locale: locale, status: LStatus }
    const LPageData: TcontactTarget = await fnGetCacheData(
        LdContext,
        clTransformerFactory.fnCreateTransformer('contact')
    )
    return LPageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const pageData = await fnGetContactPageData(await params)
    return getPageMetadata(pageData.contact.metaData)
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const pageData = await fnGetContactPageData(await params)
    const jsonLd = pageData.contact.metaData.schemaData
    return (
        <>
            <Contact idContact={pageData} />
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