"use client";

import posthog from "posthog-js";
import { useEffect } from "react";
import { fnInitAutoTracking } from "../lib/rudder/auto-track";
import useRudderStackAnalytics from "../lib/rudder/rudder-analytics";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    // console.log("ClientLayout component rendered");
    // initRudderStack();
    const LdRudderanalytics = useRudderStackAnalytics();

    useEffect(() => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
            api_host: "/ingest",
            ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
            defaults: "2026-01-30",
            capture_exceptions: true,
            debug: process.env.NODE_ENV === "development",
        });
    }, []);

    useEffect(() => {
        if (!LdRudderanalytics) return;

        LdRudderanalytics.ready(() => {
            // console.log("✅ RudderStack ready — initializing auto tracking");
            fnInitAutoTracking(LdRudderanalytics);
        });
    }, [LdRudderanalytics]);
    return <>{children}</>
}