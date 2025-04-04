"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@repo/ui/lib/utils"
import { LdBookingPageFormConfig, LdContactPageFormConfig, SectionForm } from "@repo/ui/components/form"
import Navbar from "@repo/ui/components/navbar"
import Footer from "@repo/ui/components/footer"

// Content data for the contact page (only the parts that aren't in the form config)
const LdContactPageData = {
    title: {
        text1: "Get in ",
        text2: "Touch",
    },
    subtitle:
        "We're here to help with any questions you might have. Fill out the form below and we'll get back to you as soon as possible.",
}

// Content data for the booking page (only the parts that aren't in the form config)
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

    // Handle form submission success
    const fnHandleContactSuccess = ( message: string) => {
        fnSetContactMessage(message)
    }

    const fnHandleBookingSuccess = ( message: string) => {
        fnsetBookingMessage(message)
    }

    return (
        <section>
            <Navbar />
            <div className="container mx-auto max-w-7xl py-10">
                {/* Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 items-stretch mb-24">
                    {/* Contact Content - Left on desktop, Top on mobile */}
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

                    {/* Contact Form - Right on desktop, Below content on mobile */}
                    <div className="lg:col-span-4 order-2">
                        <div className={cn("bg-background rounded-xl shadow-md p-2 md:p-4 mx-auto md:max-w-2xl w-full")}>
                            <h2 className="text-xl sm:text-3xl font-bold font-sans tracking-wide text-primary md:text-4xl">
                                {LdContactPageFormConfig.title}
                            </h2>
                            {ContactMessage ? (
                                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md">{ContactMessage}</div>
                            ) : (
                                <SectionForm
                                    config={LdContactPageFormConfig}
                                    onSuccess={fnHandleContactSuccess}
                                    className="shadow-none bg-transparent p-0"
                                    hideCardHeader={true}
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Booking Section */}
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 items-stretch mt-16" id="booking">
                    {/* Booking Content - Right on desktop, Top on mobile */}
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

                    {/* Booking Form - Left on desktop, Below booking content on mobile */}
                    <div className="lg:col-span-4 order-4">
                        <div className={cn("bg-background rounded-xl shadow-md p-2 md:p-4 mx-auto md:max-w-2xl w-full")}>
                            <h2 className="text-xl sm:text-3xl font-bold font-sans tracking-wide text-primary md:text-4xl">
                                {LdBookingPageFormConfig.title}
                            </h2>
                            {BookingMessage ? (
                                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md">{BookingMessage}</div>
                            ) : (
                                <SectionForm
                                    config={LdBookingPageFormConfig}
                                    onSuccess={fnHandleBookingSuccess}
                                    className="shadow-none bg-transparent p-0"
                                    hideCardHeader={true}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}