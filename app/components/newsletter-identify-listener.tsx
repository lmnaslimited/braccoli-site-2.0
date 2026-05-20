"use client"

import { useEffect } from "react"
import { identifyPostHogFormSubmitter } from "../lib/posthog-identify"

type TNewsletterSubscribedEvent = CustomEvent<{
  email?: string
  status?: "subscribed" | "already_subscribed" | "error"
}>

export default function NewsletterIdentifyListener() {
  useEffect(() => {
    const fnHandleNewsletterSubscribed = (iEvent: Event) => {
      const LdEvent = iEvent as TNewsletterSubscribedEvent

      if (
        !LdEvent.detail?.email ||
        !["subscribed", "already_subscribed"].includes(LdEvent.detail.status ?? "error")
      ) {
        return
      }

      identifyPostHogFormSubmitter(
        { email: LdEvent.detail.email },
        {
          formId: "newsletter",
          formSource: "footer_newsletter",
          formTitle: "Footer newsletter",
          newsletterOptIn: true,
        },
      )
    }

    window.addEventListener("newsletter_subscribed", fnHandleNewsletterSubscribed)

    return () => {
      window.removeEventListener("newsletter_subscribed", fnHandleNewsletterSubscribed)
    }
  }, [])

  return null
}
