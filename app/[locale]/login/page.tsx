import LoginForm from '@repo/ui/components/login'
import { fnGetCacheData } from '../../utils/strapi/get-data'
import { clTransformerFactory } from '@repo/middleware'
import { fnGetStatus } from '../../utils/strapi/get-status'
import { Tcontext, TLoginTarget } from '@repo/middleware/types'

async function getLoginFormData(params: { locale: string }) {
  const { locale } = params
  const LStatus = await fnGetStatus()
  const context: Tcontext = { locale: locale, status: LStatus }
  const pageData: TLoginTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('loginAndSignUp')
  )
  return pageData
}

export default async function LoginPage({ params }: { params: Promise<{ locale: string }> }) {
  const LdPageData = await getLoginFormData(await params)
  return (
    <>
      <LoginForm  idLogin={LdPageData}/>
      
    </>
  )
}