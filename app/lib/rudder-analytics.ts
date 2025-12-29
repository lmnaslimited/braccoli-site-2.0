import { useEffect, useState } from "react"
import {
  type LoadOptions,
  RudderAnalytics,
  RudderAnalyticsPreloader,
} from "@rudderstack/analytics-js"

// Shared initialization promise
let ldInitializationPromise: Promise<RudderAnalytics | undefined> | null = null

const useRudderStackAnalytics = ():
  | RudderAnalytics
  | RudderAnalyticsPreloader
  | undefined => {
  const [LdAnalytics, fnSetAnalytics] = useState<
    RudderAnalytics | RudderAnalyticsPreloader
  >()

  useEffect(() => {
    if (!LdAnalytics) {
      const fnInitialize = async () => {
        // If initialization is already in progress, wait for it
        if (ldInitializationPromise) {
          const LdInstance = await ldInitializationPromise
          if (LdInstance) {
            fnSetAnalytics(LdInstance)
          }
          return
        }

        // Start new initialization
        ldInitializationPromise = (async () => {
          const LWriteKey = process.env.NEXT_PUBLIC_RUDDERSTACK_WRITE_KEY
          const LDataplaneUrl =
            process.env.NEXT_PUBLIC_RUDDERSTACK_DATAPLANE_URL
          const LConfigUrl = process.env.NEXT_PUBLIC_RUDDERSTACK_CONFIG_URL

          if (!LWriteKey || !LDataplaneUrl) {
            console.error(`
  RudderStack configuration is missing. Please follow these steps:
  1. Create a .env file in the repository root directory with valid values:
     WRITE_KEY=your_write_key
     DATAPLANE_URL=your_dataplane_url
   CONFIG_SERVER_HOST=your_config_server_host
  2. Run the setup script to configure all examples:
     ./scripts/setup-examples-env.sh
  `)
            return undefined
          }

          const { RudderAnalytics } = await import("@rudderstack/analytics-js")
          const LdAnalyticsInstance = new RudderAnalytics()

          // Build SDK configuration
          const LdLoadOptions: Partial<LoadOptions> = {
            onLoaded: () => {
              // console.log('LMNAs Analytics is loaded!!!');
            },
          }

          // Add configUrl if provided
          if (LConfigUrl) {
            LdLoadOptions.configUrl = LConfigUrl
          }
          LdLoadOptions.sessions = {
            autoTrack: true,
            cutOff: {
              enabled: true, // Optional; set to true to enable the feature
              duration: 12 * 60 * 60 * 1000, // Optional; 12 hours in milliseconds (default)
            },
            timeout: 10 * 60 * 1000, // 10 min in milliseconds; Default is 30 minutes
          }

          LdAnalyticsInstance.load(LWriteKey, LDataplaneUrl, LdLoadOptions)

          LdAnalyticsInstance.ready(() => {
            // console.log('LMNAS Analytics is ready!!!');
          })

          return LdAnalyticsInstance
        })()

        const LdInstance = await ldInitializationPromise
        if (LdInstance) {
          fnSetAnalytics(LdInstance)
        }
      }

      fnInitialize().catch((e) =>
        console.error("Error initializing RudderStack Analytics:", e)
      )
    }
  }, [LdAnalytics])

  // Return initialized instance if available, otherwise fallback to window.rudderanalytics
  if (LdAnalytics) {
    return LdAnalytics
  }

  return typeof window !== "undefined" ? window.rudderanalytics : undefined
}

export default useRudderStackAnalytics
