"use client"

import { useState, useRef } from "react"
import type { ReactNode } from "react"

import {
    TformMode,
    TbenefitType
} from "@repo/middleware/types"

export const useWidgetHandler = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [activeWidget, setActiveWidget] = useState<string | null>(null)
    const [widgetProps, setWidgetProps] = useState<unknown>(null)

  const widgetRef = useRef<HTMLDivElement>(null)

  const openWidget = (
    widgetName: string,
    sectionId: string,
        props?: unknown
  ) => {
    if (activeSection === sectionId && activeWidget === widgetName) {
      setActiveSection(null)
      setActiveWidget(null)
      return
    }

    setActiveSection(sectionId)
    setActiveWidget(widgetName)
        setWidgetProps(props)

    setTimeout(() => {
      widgetRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }, 100)
  }

  const openCTA = (
    sectionId: string,
    options: {
            formMode?: TformMode | null
            benefitMode?: TbenefitType | null
      label?: string
    }
  ) => {
    if (options.formMode) {
      openWidget("form", sectionId, {
        formMode: options.formMode,
                formTitle: options.label
      })
      return
    }

    if (options.benefitMode) {
      openWidget("chat", sectionId, {
        benefitType: options.benefitMode,
      })
    }
  }

  const renderWidget = (
    sectionId: string,
        registry: Record<string, React.ComponentType<unknown>>
  ): ReactNode => {
    if (activeSection !== sectionId) return null
    if (!activeWidget) return null

    const WidgetComponent = registry[activeWidget] as React.ComponentType<Record<string, unknown>>
    if (!WidgetComponent) return null

    return (
      <div ref={widgetRef}>
        <WidgetComponent {...(widgetProps as Record<string, unknown>)} />
      </div>
    )
  }

  return { openCTA, renderWidget }
}