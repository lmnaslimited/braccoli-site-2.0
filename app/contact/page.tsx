"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@repo/ui/lib/utils"
import { LdBookingPageFormConfig, LdContactPageFormConfig, SectionForm } from "@repo/ui/components/form"
import Navbar from "@repo/ui/components/navbar"
import Footer from "@repo/ui/components/footer"

// Content data for the contact page (only the parts that aren't in the form config)
const contactPageData = {
    title: {
        text1: "Get in ",
        text2: "Touch",
    },
    subtitle:
        "We're here to help with any questions you might have. Fill out the form below and we'll get back to you as soon as possible.",
}

// Content data for the booking page (only the parts that aren't in the form config)
const bookingPageData = {
    title: {
        text1: "Reserve Your ",
        text2: "Spot",
    },
    subtitle:
        "Schedule a meeting with our team at your convenience. We're looking forward to discussing how we can help you.",
}

interface ContactPageProps {
    id?: string
}

export default function ContactPage({ id }: ContactPageProps) {
    const [contactMessage, setContactMessage] = useState("")
    const [bookingMessage, setBookingMessage] = useState("")

    // Handle form submission success
    const handleContactSuccess = (data: any, message: string) => {
        setContactMessage(message)
    }

    const handleBookingSuccess = (data: any, message: string) => {
        setBookingMessage(message)
    }

    return (
        <section>
            <Navbar />
            <div className="container mx-auto max-w-7xl py-10 ">
                {/* Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 items-stretch mb-24">
                    {/* Contact Content - Left on desktop, Top on mobile */}
                    <div className="lg:col-span-4 flex items-center justify-center order-1">
                        <div className="text-center px-6">
                            <h2 className={cn("font-bold text-3xl md:text-5xl tracking-normal text-center")}>
                                <span>{contactPageData.title.text1}</span>
                                <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
                                    {contactPageData.title.text2}
                                </span>
                            </h2>
                            <p className={cn("text-muted-foreground md:text-xl max-w-lg mx-auto text-center mt-4")}>
                                {contactPageData.subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Contact Form - Right on desktop, Below content on mobile */}
                    <div className="lg:col-span-4 order-2">
                        <div className={cn("bg-white rounded-xl shadow-md p-2 md:p-4 mx-auto md:max-w-2xl w-full")}>
                            <h2 className="text-xl sm:text-3xl font-bold font-sans tracking-wide text-neutral-900 md:text-4xl">
                                {LdContactPageFormConfig.title}
                            </h2>
                            {contactMessage ? (
                                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md">{contactMessage}</div>
                            ) : (
                                <SectionForm
                                    config={LdContactPageFormConfig}
                                    onSuccess={handleContactSuccess}
                                    className="shadow-none bg-transparent p-0"
                                    hideCardHeader={true}
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Booking Section */}
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 items-stretch mt-16">
                    {/* Booking Content - Right on desktop, Top on mobile */}
                    <div className="lg:col-span-4 flex items-center justify-center lg:order-last order-3">
                        <div className="text-center px-6">
                            <h2 className={cn("font-bold text-3xl md:text-5xl tracking-normal text-center")}>
                                <span>{bookingPageData.title.text1}</span>
                                <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
                                    {bookingPageData.title.text2}
                                </span>
                            </h2>
                            <p className={cn("text-muted-foreground md:text-xl max-w-lg mx-auto text-center mt-4")}>
                                {bookingPageData.subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Booking Form - Left on desktop, Below booking content on mobile */}
                    <div className="lg:col-span-4 order-4">
                        <div className={cn("bg-white rounded-xl shadow-md p-2 md:p-4 mx-auto md:max-w-2xl w-full")}>
                            <h2 className="text-xl sm:text-3xl font-bold font-sans tracking-wide text-neutral-900 md:text-4xl">
                                {LdBookingPageFormConfig.title}
                            </h2>
                            {bookingMessage ? (
                                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md">{bookingMessage}</div>
                            ) : (
                                <SectionForm
                                    config={LdBookingPageFormConfig}
                                    onSuccess={handleBookingSuccess}
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

