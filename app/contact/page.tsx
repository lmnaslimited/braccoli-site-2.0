// "use client"

// import type React from "react"
// import { useState } from "react"
// import { CalendarIcon, ArrowRightIcon } from "lucide-react"
// import { cn } from "@repo/ui/lib/utils"
// import { LdBookingPageFormConfig, LdContactPageFormConfig, SectionForm } from "@repo/ui/components/form"
// import Navbar from "@repo/ui/components/navbar"
// import Footer from "@repo/ui/components/footer"


// // Content data for the contact page (only the parts that aren't in the form config)
// const contactPageData = {
//     title: {
//         text1: "Get in ",
//         text2: "Touch",
//     },
//     subtitle:
//         "We're here to help with any questions you might have. Fill out the form below and we'll get back to you as soon as possible.",
// }

// // Content data for the booking page (only the parts that aren't in the form config)
// const bookingPageData = {
//     title: {
//         text1: "Reserve Your",
//         text2: "Spot",
//     },
//     subtitle:
//         "Schedule a meeting with our team at your convenience. We're looking forward to discussing how we can help you.",
// }

// interface ContactPageProps {
//     initialMode?: "contact" | "booking"
//     id?: string
//     position?: "left" | "right"
// }

// export default function ContactPage({ initialMode = "contact", id, position = "left" }: ContactPageProps) {
//     const [activeMode, setActiveMode] = useState<"contact" | "booking">(initialMode)
//     const [serverMessage, setServerMessage] = useState("")
//     const [isLoaded, setIsLoaded] = useState(false)

//     // Get the appropriate content data based on active mode
//     const pageData = activeMode === "contact" ? contactPageData : bookingPageData
//     const formConfig = activeMode === "contact" ? LdContactPageFormConfig : LdBookingPageFormConfig

//     // Toggle between contact and booking modes
//     const toggleMode = () => {
//         setActiveMode(activeMode === "contact" ? "booking" : "contact")
//         setServerMessage("")
//     }

//     // Handle form submission success
//     const handleFormSuccess = (data: any, message: string) => {
//         setServerMessage(message)
//         // You can add additional logic here if needed
//     }

//     return (
//         <section>
//             <Navbar />
//             <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" id={id}>
//                 <div className="container mx-auto max-w-7xl">
//                     <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 items-stretch">
//                         <div
//                             className={`${position === "right" ? "lg:order-last" : ""
//                                 } lg:col-span-4 lg:min-h-[600px] flex items-center justify-center relative`}
//                         >
//                             {/* Contact Info Section - Centered both vertically and horizontally */}
//                             <div className="flex flex-col items-center justify-center w-full h-full py-8">
//                                 <div className={cn("w-full flex flex-col space-y-4 items-center justify-center")}>
//                                     <div className="relative inline-block">

//                                     </div>
//                                 </div>

//                                 {/* Toggle button positioned at the bottom */}
//                                 <div className="mt-auto pt-12">
//                                     <button
//                                         onClick={toggleMode}
//                                         className={cn(
//                                             "relative overflow-hidden group py-3 px-6 rounded-full transition-all duration-300",
//                                             "bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg",
//                                             "transform hover:-translate-y-1",
//                                         )}
//                                     >
//                                         <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
//                                             {activeMode === "contact" ? (
//                                                 <>
//                                                     <span>Switch to Booking</span>
//                                                     <CalendarIcon className="h-5 w-5" />
//                                                 </>
//                                             ) : (
//                                                 <>
//                                                     <span>Switch to Contact</span>
//                                                     <ArrowRightIcon className="h-5 w-5" />
//                                                 </>
//                                             )}
//                                         </span>
//                                         <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Form Section - Using custom wrapper with SectionForm */}
//                         <div className="lg:col-span-4">
//                             <div className={cn("bg-white rounded-xl shadow-md p-2 md:p-4 mx-auto md:max-w-2xl w-full")}>
//                                 <h2 className="text-xl sm:text-3xl font-bold font-sans tracking-wide text-neutral-900 md:text-4xl">
//                                     {formConfig.title}
//                                 </h2>
//                                 <SectionForm
//                                     config={formConfig}
//                                     onSuccess={handleFormSuccess}
//                                     className="shadow-none bg-transparent p-0"
//                                     hideCardHeader={true}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </section>
//     )
// }






















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
            <div className="container mx-auto max-w-7xl py-10">
                {/* Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 items-stretch mb-24">
                    {/* Contact Content - Left on desktop, Top on mobile */}
                    <div className="lg:col-span-4 lg:sticky lg:top-8 flex items-center justify-center min-h-[300px] lg:min-h-[600px] order-1">
                        <div className="text-center lg:text-left px-6 lg:px-0 max-w-md">
                            <h2 className={cn("font-bold text-6xl tracking-normal text-center")}>
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
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 items-stretch mt-16">
                    {/* Booking Content - Right on desktop, Top on mobile */}
                    <div className="lg:col-span-4 lg:sticky lg:top-8 flex items-center justify-center min-h-[300px] lg:min-h-[600px] lg:order-last order-3">
                        <div className="text-center lg:text-left px-6 lg:px-0 max-w-md">
                            <h2 className={cn("font-bold text-6xl tracking-normal text-center")}>
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

