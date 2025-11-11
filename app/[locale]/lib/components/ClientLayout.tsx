"use client";

import { useEffect } from "react";
import { initAutoTracking } from "../autotrack";
import useRudderStackAnalytics from "../useRudderAnalytics";

export default function ClientLayout({ children }: { children: React.ReactNode }){
    console.log("ClientLayout component rendered");
            // initRudderStack();
    const rudderanalytics = useRudderStackAnalytics();
    useEffect(() => {
    if (!rudderanalytics) return;

    rudderanalytics.ready(() => {
      console.log("✅ RudderStack ready — initializing auto tracking");
      initAutoTracking(rudderanalytics);
    });
  }, [rudderanalytics]);
    return  <>{children}</>
}