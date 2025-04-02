// hooks/useFormManager.ts
import { useState, useRef, ReactNode } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@repo/ui/components/ui/button';
import { DynamicForm, LdContactFormConfig, LdBookingFormConfig, LdDownloadFormConfig } from "@repo/ui/components/form"
import { TformMode } from '@repo/ui/type';

export const useFormHandler = () => {
    const [ActiveSection, fnSetActiveSection] = useState<string | null>(null)
    const [FormMode, fnSetFormMode] = useState<TformMode>(null)
    const [SuccessMessage, fnSetSuccessMessage] = useState<{ message: string, section: string } | null>(null)
    const LdSectionRefs = {
        containerOne: useRef<HTMLDivElement>(null),
        containerTwo: useRef<HTMLDivElement>(null),
        containerThree: useRef<HTMLDivElement>(null),
        containerFour: useRef<HTMLDivElement>(null),
        containerFive: useRef<HTMLDivElement>(null),
    }

    /**
   * Handles clicks on form buttons throughout the page.
   * This function toggles forms on and off and scrolls to the appropriate section.
   * If the same button is clicked twice, it closes the form.
   */
    const fnHandleFormButtonClick = (iMode: TformMode, iSectionId: string) => {
        if (ActiveSection === iSectionId && FormMode === iMode) {
            fnSetActiveSection(null)
            fnSetFormMode(null)
            fnSetSuccessMessage(null)
        } else {
            fnSetActiveSection(iSectionId)
            fnSetFormMode(iMode)
            fnSetSuccessMessage(null)

            setTimeout(() => {
                const currentRef = LdSectionRefs[iSectionId as keyof typeof LdSectionRefs]
                if (currentRef?.current) {
                    currentRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                    })
                }
            }, 50)
        }
    }

    /**
   * Handles successful form submissions.
   * This function displays a success message in place of the form
   * and keeps track of which section the message belongs to.
   */
    const fnHandleFormSuccess = (iMessage: string) => {
        if (ActiveSection) {
            fnSetSuccessMessage({ message: iMessage, section: ActiveSection })
        }
        fnSetFormMode(null)
    }

    /**
   * Renders a form or success message below a specific section.
   * This function determines whether to show a form, success message, or nothing
   * based on the current state and section ID.
   */
    const fnRenderFormBelowSection = (iSectionId: string): ReactNode => {
        const shouldShowForm = ActiveSection === iSectionId && FormMode !== null
        const shouldShowSuccess = SuccessMessage?.section === iSectionId

        if (!shouldShowForm && !shouldShowSuccess) return null

        // Select the appropriate form configuration based on the form mode
        let LdFormConfig = undefined
        switch (FormMode) {
            case "contact":
                LdFormConfig = LdContactFormConfig
                break
            case "booking":
                LdFormConfig = LdBookingFormConfig
                break
            case "download":
                LdFormConfig = LdDownloadFormConfig
                break
            default:
                if (!shouldShowSuccess) return null
        }

        return (
            <div className="w-full bg-background py-8">
                <div className="container mx-auto px-4">
                    {shouldShowSuccess ? (
                        <div className="max-w-lg mx-auto bg-background rounded-lg shadow-md p-4 text-center">
                            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
                            <h3 className="text-xl font-bold mb-2">Success!</h3>
                            <p className="mb-6">{SuccessMessage?.message}</p>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => {
                                    fnSetSuccessMessage(null)
                                    fnSetActiveSection(null)
                                    setTimeout(() => {
                                        window.scrollTo({ top: 0, behavior: "smooth" })
                                    }, 300)
                                }}
                            >
                                Close
                            </Button>
                        </div>
                    ) : LdFormConfig ? (
                        <DynamicForm
                            config={LdFormConfig}
                            onSuccess={fnHandleFormSuccess}
                            onCancel={() => {
                                fnSetActiveSection(null)
                                setTimeout(() => {
                                    window.scrollTo({ top: 0, behavior: "smooth" })
                                }, 300)
                            }}
                        />
                    ) : null}
                </div>
            </div>
        )
    }
    return { fnHandleFormButtonClick, fnHandleFormSuccess, fnRenderFormBelowSection, LdSectionRefs };
}
