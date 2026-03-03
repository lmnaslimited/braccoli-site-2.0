import type { UserSession } from "../types/session"

export default function GreetingBanner({ session }: { session: UserSession | null }) {
    const message = session?.identity?.name
        ? `Welcome back, ${session.identity.name}`
        : "Welcome! Let’s create your benefit outcome."
    return <p className="text-lg sm:text-xl font-semibold leading-none">{message}</p>
}

