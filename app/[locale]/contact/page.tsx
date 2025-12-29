import type { Metadata } from 'next'
import Contact from './contact'
import { fnGetCacheData } from '../../api/strapi/get-data'
import { getPageMetadata } from '../../api/metadata/page-metadata'
import { clTransformerFactory } from '@repo/middleware'
import { TcontactTarget, Tcontext } from '@repo/middleware/types'

async function getContactPageData(params: { locale: string }) {
    const { locale } = params
    const context: Tcontext = { locale: locale }
    const pageData: TcontactTarget = await fnGetCacheData(
        context,
        clTransformerFactory.createTransformer('contact')
    )
    return pageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const pageData = await getContactPageData(await params)
    return getPageMetadata(pageData.contact.metaData)
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const pageData = await getContactPageData(await params)
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