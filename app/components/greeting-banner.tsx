import type { TuserSession } from "@repo/middleware/types"

export default function GreetingBanner({ session }: { session: TuserSession | null }) {
    const LMessage = session?.identity?.name
        ? `Welcome back, ${session.identity.name}`
        : "Welcome! Let’s create your benefit outcome."
    return <p className="text-lg sm:text-xl font-semibold leading-none">{LMessage}</p>
}

