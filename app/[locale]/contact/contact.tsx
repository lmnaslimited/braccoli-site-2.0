"use client"

import { useState } from "react"
import { cn } from "@repo/ui/lib/utils"
import { SectionForm } from "@repo/ui/components/form"
import LocationCard from "@repo/ui/components/location-card"
import TitleSubtitle from "@repo/ui/components/title-subtitle"
import { TcontactTarget } from "@repo/middleware/types"
import { generateSchemaFromFields } from "@repo/ui/lib/zod-transformation"

export default function ContactChildPage({ idContact }: { idContact: TcontactTarget }) {
    const [ContactMessage, fnSetContactMessage] = useState("")
    const [BookingMessage, fnsetBookingMessage] = useState("")

    const fnHandleContactSuccess = (iMessage: string) => fnSetContactMessage(iMessage)
    const fnHandleBookingSuccess = (iMessage: string) => fnsetBookingMessage(iMessage)

    const LdBookingForm = idContact.forms.find((form) => form.formId === "booking")
    const LdContactForm = idContact.forms.find((form) => form.formId === "contact")

    if (!LdBookingForm) {
        throw new Error("Booking form not found or missing formId")
    }

    if (!LdContactForm) {
        throw new Error("Contact form not found or missing formId")
    }

    return (
        <section className="w-full">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                {/* Contact Form Section */}
                <div className="py-12 md:py-18">
                    <div className="grid grid-cols-1 md:grid-cols-8 gap-8 md:gap-12 items-stretch">
                        <div className="md:col-span-4 md:sticky md:top-8 flex items-center justify-center order-1">
                            <div className="text-center md:text-left max-w-md w-full">
                                <TitleSubtitle
                                    idTitle={{
                                        headingClass: "text-3xl md:text-5xl font-light md:mb-2 text-foreground",
                                        descripClass: "text-base md:text-xl text-foreground ",
                                        highlight: idContact.contact.header[0]?.highlight,
                                        title: idContact.contact.header[0]?.title,
                                        subtitle: idContact.contact.header[0]?.subtitle,
                                    }}
                                />
                            </div>
                        </div>

                        <div className="md:col-span-4 order-2">
                            <div
                                className={cn(
                                    "bg-card border border-border rounded-xl",
                                    "p-4 md:p-8",
                                    "w-full max-w-2xl mx-auto",
                                )}
                            >
                                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground">
                                    {LdContactForm.title}
                                </h2>

                                {ContactMessage && (
                                    <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md relative">
                                        {ContactMessage}
                                        <button
                                            onClick={() => fnSetContactMessage("")}
                                            className="absolute top-2 right-2 text-green-700 hover:text-green-900 transition-colors"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-5"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                                <SectionForm
                                    config={{
                                        ...LdContactForm,
                                        fields: idContact.contact.contactForm,
                                        schema: generateSchemaFromFields(idContact.contact.contactForm || []),
                                    }}
                                    onSuccess={fnHandleContactSuccess}
                                    className="shadow-none bg-transparent p-0 border-none"
                                    hideCardHeader={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking Form Section */}
                <div id="booking" className="py-12 md:py-18">
                    <div className="grid grid-cols-1 md:grid-cols-8 gap-8 md:gap-12 items-stretch">
                        <div className="md:col-span-4 md:sticky md:top-8 flex items-center justify-center md:order-last order-3">
                            <div className="text-center md:text-left max-w-lg w-full">
                                <TitleSubtitle
                                    idTitle={{
                                        headingClass: "text-3xl md:text-5xl font-light md:mb-2 text-foreground",
                                        descripClass: "text-base md:text-xl text-foreground ",
                                        highlight: idContact.contact.header[1]?.highlight,
                                        title: idContact.contact.header[1]?.title,
                                        subtitle: idContact.contact.header[1]?.subtitle,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:col-span-4 order-4">
                            <div
                                className={cn(
                                    "bg-card border border-border rounded-xl",
                                    "p-4 md:p-8",
                                    "w-full max-w-2xl mx-auto",
                                )}
                            >
                                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground">
                                    {LdBookingForm.title}
                                </h2>
                                {BookingMessage && (
                                    <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md relative">
                                        {BookingMessage}
                                        <button
                                            onClick={() => fnsetBookingMessage("")}
                                            className="absolute top-2 right-2 text-green-700 hover:text-green-900 transition-colors"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-5"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                                <SectionForm
                                    config={{
                                        ...LdBookingForm,
                                        fields: idContact.contact.bookingForm,
                                        schema: generateSchemaFromFields(idContact.contact.bookingForm || []),
                                    }}
                                    onSuccess={fnHandleBookingSuccess}
                                    className="shadow-none bg-transparent p-0 border-none"
                                    hideCardHeader={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Location Section */}
            <div className="py-12 md:py-16 relative overflow-hidden">
                <div className="container mx-auto px-6 relative">
                    <div className="max-w-7xl">
                        <p className="text-foreground text-sm tracking-widest uppercase mb-6 text-center">{idContact.contact.locationHeadline}</p>
                        <TitleSubtitle
                            idTitle={{
                                ...(idContact.contact.locationHeader),
                                className: "text-center mb-16",
                                headingClass: "text-4xl md:text-6xl font-light mb-8 leading-tight text-foreground",
                                descripClass: "text-xl text-foreground max-w-2xl mx-auto leading-relaxed",
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Location Cards Section */}
            <section className="pb-12 md:pb-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="space-y-16 md:space-y-32">
                            {idContact.contact.locationCard.map((lLocation) => (
                                <div key={lLocation.index}>
                                    <LocationCard idLocation={lLocation} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}