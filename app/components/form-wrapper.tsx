"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import { CheckCircle, X } from "lucide-react"
import { Button } from "@repo/ui/components/ui/button"
import { SectionForm } from "@repo/ui/components/form"
import { generateSchemaFromFields } from "@repo/ui/lib/zod-transformation"

import {
    type TformMode,
    type TformConfig,
    type TcaseStudies,
    type TtrendCardProps,
} from "@repo/middleware/types"

type Props = {
    formMode: TformMode
    formTitle?: string | null
    idData?: TtrendCardProps
    idPdfData?: TcaseStudies
    onClose?: () => void
}

export default function FormWrapper({
    formMode,
    formTitle,
    idData,
    idPdfData,
    onClose,
}: Props) {

    const params = useParams()
    const locale = params.locale as string

    const [pageData, setPageData] = useState<TformConfig[] | null>(null)

    const [successMessage, setSuccessMessage] = useState<{
        message: string
        title: string
    } | null>(null)

    /*
    -------------------------
    Fetch Form Config
    -------------------------
    */

    useEffect(() => {

        const fetchForms = async () => {

            try {

                const res = await fetch(`/api/forms?locale=${locale}`)
                const data = await res.json()

                const schemaForms = data.forms.map((form: TformConfig) => ({
                    ...form,
                    schema: generateSchemaFromFields(form.fields || []),
                }))

                setPageData(schemaForms)

            } catch (err) {
                console.error("Form fetch error:", err)
            }

        }

        fetchForms()

    }, [locale])

    /*
    -------------------------
    Success Handler
    -------------------------
    */

    const handleSuccess = (message: string, title: string) => {

        setSuccessMessage({
            message,
            title,
        })

    }

    const formRecord = pageData?.find(
        (record) => record.formId === formMode
    )

    if (!formRecord) return null

    const formConfig = {
        ...formRecord,
        title: formTitle ?? formRecord.title,
    }

    return (
        <div className="w-full bg-background py-8">

            <div className="container mx-auto px-4">

                {successMessage ? (

                    <div className="max-w-lg mx-auto bg-background rounded-lg shadow-md p-4 text-center">

                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />

                        <h3 className="text-xl font-bold mb-2">
                            {successMessage.title}
                        </h3>

                        <p className="mb-6">
                            {successMessage.message}
                        </p>

                        <Button
                            variant="outline"
                            onClick={() => {

                                setSuccessMessage(null)
                                onClose?.()

                                setTimeout(() => {
                                    window.scrollTo({ top: 0, behavior: "smooth" })
                                }, 300)

                            }}
                        >
                            <X />
                        </Button>

                    </div>

                ) : (

                    <SectionForm
                        config={formConfig}
                        onSuccess={handleSuccess}
                        onCancel={onClose}
                        data={idData || null}
                        pdfData={idPdfData || null}
                    />

                )}

            </div>

        </div>
    )
}