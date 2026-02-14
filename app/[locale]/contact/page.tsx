import type { Metadata } from 'next'
import Contact from './contact'
import { fnGetCacheData } from '../../api/getData'
import { getPageMetadata } from '../../api/getPageMetadata'
import { clTransformerFactory, TcontactTarget, Tcontext } from '@repo/middleware'
import { fnGetStatus } from '../../utils/strapi/get-status'

async function getContactPageData(params: { locale: string }) {
    const { locale } = params
    const status = await fnGetStatus()   //Fetch publication status from Strapi and pass it to context 
    const context: Tcontext = { locale: locale, status: status }
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
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd, null, 2).replace(/</g, '\\u003c'),
                    }}
                />
            )}
            <Contact idContact={pageData} />
        </>
    )
}