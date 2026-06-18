"use client";

import posthog from "posthog-js";
import { useEffect } from "react";
import { fnInitAutoTracking } from "../lib/auto-track";
import useRudderStackAnalytics from "../lib/rudder-analytics";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    // console.log("ClientLayout component rendered");
    // initRudderStack();
    const LdRudderanalytics = useRudderStackAnalytics();

    useEffect(() => {
       posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {  
            api_host: process.env.NODE_ENV === "development"  
            ? "https://us.i.posthog.com" // direct in dev, no proxy needed  
            : "/ingest", // proxy only in production  
            ui_host: "https://us.posthog.com",  
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