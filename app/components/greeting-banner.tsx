import { TbenefitChat } from "@repo/middleware/types"
import type { UserSession } from "../types/session"

export default function GreetingBanner({ idSession, idContent }: { idSession: UserSession | null, idContent: TbenefitChat | null }) {
    const LMessage = idSession?.identity?.name
    ? `${idContent?.welcomeBackText ?? "Welcome back"}, ${idSession.identity.name}`
    : idContent?.welcomeNewText ??
      "Welcome! Let’s create your benefit outcome.";

    return <p className="text-lg sm:text-xl font-semibold leading-none">{LMessage}</p>
}

