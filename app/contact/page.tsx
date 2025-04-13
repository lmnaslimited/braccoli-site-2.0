"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@repo/ui/lib/utils"
import { LdBookingPageFormConfig, LdContactPageFormConfig, SectionForm } from "@repo/ui/components/form"
import Footer from "@repo/ui/components/footer"

const LdContactPageData = {
    title: {
        text1: "Get in ",
        text2: "Touch",
    },
    subtitle:
        "We're here to help with any questions you might have. Fill out the form below and we'll get back to you as soon as possible.",
}

const LdBookingPageData = {
    title: {
        text1: "Reserve Your ",
        text2: "Spot",
    },
    subtitle:
        "Schedule a meeting with our team at your convenience. We're looking forward to discussing how we can help you.",
}

export default function ContactPage() {
    const [ContactMessage, fnSetContactMessage] = useState("")
    const [BookingMessage, fnsetBookingMessage] = useState("")

    // Handlers to update state with success messages after contact 
    const fnHandleContactSuccess = (iMessage: string) => {
        fnSetContactMessage(iMessage)
    }
    // Handlers to update state with success messages after booking actions
    const fnHandleBookingSuccess = (iMessage: string) => {
        fnsetBookingMessage(iMessage)
    }

    return (
        <section>
            <div className="container mx-auto max-w-7xl py-10">
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 items-stretch mb-24">
                    <div className="lg:col-span-4 lg:sticky lg:top-8 flex items-center justify-center min-h-[300px] lg:min-h-[600px] order-1">
                        <div className="text-center lg:text-left px-6 lg:px-0 max-w-md">
                            <h2 className={cn("font-bold text-6xl tracking-normal text-center")}>
                                <span>{LdContactPageData.title.text1}</span>
                                <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
                                    {LdContactPageData.title.text2}
                                </span>
                            </h2>
                            <p className={cn("text-muted-foreground md:text-xl max-w-lg mx-auto text-center mt-4")}>
                                {LdContactPageData.subtitle}
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-4 order-2">
                        <div className={cn("bg-background rounded-xl shadow-md p-2 md:p-4 mx-auto md:max-w-2xl w-full")}>
                            <h2 className="text-xl sm:text-3xl font-bold font-sans tracking-wide text-primary md:text-4xl">
                                {LdContactPageFormConfig.title}
                            </h2>
                            {ContactMessage && (
                                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md relative">
                                    {ContactMessage}
                                    <button
                                        onClick={() => fnSetContactMessage("")}
                                        className="absolute top-2 right-2 text-green-700 hover:text-green-900"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                            <SectionForm
                                config={LdContactPageFormConfig}
                                onSuccess={fnHandleContactSuccess}
                                className="shadow-none bg-transparent p-0"
                                hideCardHeader={true}
                            />

                        </div>
                    </div>
                </div>

                <div id="booking">
                    <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 items-stretch mt-20">
                        <div className="lg:col-span-4 lg:sticky lg:top-8 flex items-center justify-center min-h-[300px] lg:min-h-[600px] lg:order-last order-3">
                            <div className="text-center lg:text-left px-6 lg:px-0 max-w-md">
                                <h2 className={cn("font-bold text-6xl tracking-normal text-center")}>
                                    <span>{LdBookingPageData.title.text1}</span>
                                    <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
                                        {LdBookingPageData.title.text2}
                                    </span>
                                </h2>
                                <p className={cn("text-muted-foreground md:text-xl max-w-lg mx-auto text-center mt-4")}>
                                    {LdBookingPageData.subtitle}
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-4 order-4">
                            <div className={cn("bg-background rounded-xl shadow-md p-2 md:p-4 mx-auto md:max-w-2xl w-full")}>
                                <h2 className="text-xl sm:text-3xl font-bold font-sans tracking-wide text-primary md:text-4xl">
                                    {LdBookingPageFormConfig.title}
                                </h2>
                                {BookingMessage && (
                                    <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md relative">
                                        {BookingMessage}
                                        <button
                                            onClick={() => fnsetBookingMessage("")}
                                            className="absolute top-2 right-2 text-green-700 hover:text-green-900"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                                <SectionForm
                                    config={LdBookingPageFormConfig}
                                    onSuccess={fnHandleBookingSuccess}
                                    className="shadow-none bg-transparent p-0"
                                    hideCardHeader={true}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}