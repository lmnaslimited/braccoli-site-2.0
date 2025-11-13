"use client";

import { useEffect } from "react";
import { fnInitAutoTracking } from "../autotrack";
import useRudderStackAnalytics from "../useRudderAnalytics";

export default function ClientLayout({ children }: { children: React.ReactNode }){
    // console.log("ClientLayout component rendered");
            // initRudderStack();
    const LdRudderanalytics = useRudderStackAnalytics();
    useEffect(() => {
    if (!LdRudderanalytics) return;

   LdRudderanalytics.ready(() => {
      // console.log("✅ RudderStack ready — initializing auto tracking");
      fnInitAutoTracking(LdRudderanalytics);
    });
  }, [LdRudderanalytics]);
    return  <>{children}</>
}