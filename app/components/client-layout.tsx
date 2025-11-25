"use client";

import { useEffect } from "react";
import { fnInitAutoTracking } from "@app/lib/rudder/auto-track";
import useRudderStackAnalytics from "@app/lib/rudder/rudder-analytics";

export default function ClientLayout({ children }: { children: React.ReactNode }) {

  const LdRudderanalytics = useRudderStackAnalytics();
  useEffect(() => {
    if (!LdRudderanalytics) return;

    LdRudderanalytics.ready(() => {
      fnInitAutoTracking(LdRudderanalytics);
    });
  }, [LdRudderanalytics]);
  return <>{children}</>
}