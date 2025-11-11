"use client";

import { useEffect } from "react";
import { initAutoTracking } from "../autotrack";
import useRudderStackAnalytics from "../useRudderAnalytics";

export default function ClientLayout({ children }: { children: React.ReactNode }){
    // console.log("ClientLayout component rendered");
            // initRudderStack();
    const LdRudderanalytics = useRudderStackAnalytics();
    useEffect(() => {
    if (!LdRudderanalytics) return;

   LdRudderanalytics.ready(() => {
      // console.log("✅ RudderStack ready — initializing auto tracking");
      initAutoTracking(LdRudderanalytics);
    });
  }, [LdRudderanalytics]);
    return  <>{children}</>
}