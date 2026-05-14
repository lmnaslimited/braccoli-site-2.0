"use client"

import { useState, useRef } from "react"
import type { ReactNode } from "react"

import {
    TformMode,
    TbenefitType
} from "@repo/middleware/types"

type WidgetProps = Record<string, unknown>
type WidgetRegistry = Record<string, React.ComponentType<WidgetProps>>

export const useWidgetHandler = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [activeWidget, setActiveWidget] = useState<string | null>(null)
  const [widgetProps, setWidgetProps] = useState<WidgetProps | null>(null)

  const widgetRef = useRef<HTMLDivElement>(null)

  const openWidget = (
    widgetName: string,
    sectionId: string,
    props?: WidgetProps
  ) => {
    if (activeSection === sectionId && activeWidget === widgetName) {
      setActiveSection(null)
      setActiveWidget(null)
      return
    }

    setActiveSection(sectionId)
    setActiveWidget(widgetName)
    setWidgetProps(props || null)

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
    registry: WidgetRegistry
  ): ReactNode => {
    if (activeSection !== sectionId) return null
    if (!activeWidget) return null

    const WidgetComponent = registry[activeWidget]
    if (!WidgetComponent) return null

    return (
      <div ref={widgetRef}>
        <WidgetComponent {...(widgetProps ?? {})} />
      </div>
    )
  }

  return { openCTA, renderWidget }
}