"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@repo/ui/lib/utils"
import { SectionForm } from "@repo/ui/components/form"
import TitleSubtitle from "@repo/ui/components/titleSubtitle"
import { TcontactTarget } from "@repo/middleware"
import { generateSchemaFromFields } from "@repo/ui/lib/zodTransformation"
import LocationCard from "@repo/ui/components/locationCard"

export default function ContactChildPage({ idContact }: { idContact: TcontactTarget }) {
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

    const LdBookingForm = idContact.forms.find(form => form.formId === "booking");
    const LdContactForm = idContact.forms.find(form => form.formId === "contact");

    if (!LdBookingForm) {
        throw new Error("Booking form not found or missing formId");
    }
    if (!LdContactForm) {
        throw new Error("Booking form not found or missing formId");
    }


    return (
        <section>
            <div className="container mx-auto max-w-7xl py-10">
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 items-stretch mb-24">
                    <div className="lg:col-span-4 lg:sticky lg:top-8 flex items-center justify-center min-h-[300px] lg:min-h-[600px] order-1">
                        <div className="text-center lg:text-left px-6 lg:px-0 max-w-md">
                            <TitleSubtitle
                                idTitle={{
                                    highlight: idContact.contact.header[0]?.highlight,
                                    title: idContact.contact.header[0]?.title,
                                    subtitle: idContact.contact.header[0]?.subtitle
                                }}
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-4 order-2">
                        <div className={cn("bg-card border border-border rounded-xl shadow-md p-2 md:p-4 mx-auto md:max-w-2xl w-full")}>
                            <h2 className="text-xl sm:text-3xl font-bold font-sans tracking-wide text-foreground md:text-4xl">
                                {LdContactForm.title}
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
                                config={{
                                    ...LdContactForm,
                                    fields: idContact.contact.contactForm,
                                    schema: generateSchemaFromFields(idContact.contact.contactForm || [])
                                }}
                                onSuccess={fnHandleContactSuccess}
                                className="shadow-none bg-transparent p-0 border-none"
                                hideCardHeader={true}
                            />

                        </div>
                    </div>
                </div>

                <div id="booking">
                    <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 items-stretch mt-20">
                        <div className="lg:col-span-4 lg:sticky lg:top-8 flex items-center justify-center min-h-[300px] lg:min-h-[600px] lg:order-last order-3">
                            <div className="text-center lg:text-left px-6 lg:px-0 max-w-md">
                                <TitleSubtitle
                                    idTitle={{
                                        highlight: idContact.contact.header[1]?.highlight,
                                        title: idContact.contact.header[1]?.title,
                                        subtitle: idContact.contact.header[1]?.subtitle
                                    }}
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-4 order-4">
                            <div className={cn("bg-card border border-borde rounded-xl shadow-md p-2 md:p-4 mx-auto md:max-w-2xl w-full")}>
                                <h2 className="text-xl sm:text-3xl font-bold font-sans tracking-wide text-foreground md:text-4xl">
                                    {LdBookingForm.title}
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
                                    config={{
                                        ...LdBookingForm,
                                        fields: idContact.contact.bookingForm, // override with your desired fields
                                        schema: generateSchemaFromFields(idContact.contact.bookingForm || [])
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

            <div className="pt-14 relative overflow-hidden">
                <div className="container mx-auto px-6 relative">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-foreground text-sm tracking-widest uppercase mb-6 text-center">{idContact.contact.locationHeadline}</p>
                        <TitleSubtitle
                            idTitle={{
                                ...(idContact.contact.locationHeader),
                                className: "text-center mb-20",
                                headingClass: "text-4xl md:text-6xl font-light mb-8 leading-tight  text-foreground",
                                descripClass: "text-xl text-foreground max-w-2xl mx-auto leading-relaxed",
                            }}
                        />
                    </div>
                </div>
            </div>

            <section className="container mx-auto px-6 last:p-20 relative">
                <div className="max-w-8xl mx-auto">
                    <div>
                        {idContact.contact.locationCard.map((lLocation, lIndex) => (
                            <div key={lLocation.index} className={`relative ${lIndex < idContact.contact.locationCard.length - 1 ? "mb-32" : ""}`}>
                                <LocationCard location={lLocation} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section >
    )
}