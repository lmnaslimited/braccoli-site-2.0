"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const [isVisible, setIsVisible] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Page Error:", error)
    }, [error])

    useEffect(() => {
        // Trigger fade-in animation after component mounts
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        // Continuously animate progress bar in 15-second loops
        const duration = 15000 // 15 seconds
        let animationId: number

        const animateProgress = () => {
            const startTime = Date.now()

            const updateProgress = () => {
                const elapsed = Date.now() - startTime
                const progressPercent = (elapsed / duration) * 100

                if (progressPercent >= 100) {
                    setProgress(100)
                    // Reset and start again after a brief moment
                    setTimeout(() => {
                        setProgress(0)
                        animateProgress() // Start the loop again
                    }, 100)
                } else {
                    setProgress(progressPercent)
                    animationId = requestAnimationFrame(updateProgress)
                }
            }

            updateProgress()
        }

        // Start animation after a small delay
        const progressTimer = setTimeout(() => {
            animateProgress()
        }, 500)

        return () => {
            clearTimeout(progressTimer)
            if (animationId) {
                cancelAnimationFrame(animationId)
            }
        }
    }, [])

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div
                className={`flex items-center justify-center gap-2 md:gap-2 transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
            >
                {/* Left side - Illustration */}
                <div className="flex-shrink-0">
                    <Image
                        src="https://res.cloudinary.com/lmnas/image/upload/v1750055832/Website/Error%20Page/coffee-worker_qrtdop.png"
                        alt="Person working on laptop while sitting on a coffee cup"
                        width={300}
                        height={450}
                        className="w-full max-w-xs h-auto"
                    />
                </div>

                {/* Right side - Content */}
                <div className="text-left space-y-6 max-w-md">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-none">Ooops!</h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We&apos;re currently working behind the scenes. Check back in{" "}
                            <span className="font-semibold text-black">5 minutes</span> — meanwhile enjoy your coffee!
                        </p>
                    </div>

                    {/* Progress indicator */}
                    <div className="max-w-xs">
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                            <div
                                className="bg-black h-2 rounded-full transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <p className="text-sm text-gray-500">Thanks for your patience!</p>
                    </div>

                    {/* Error actions */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => reset()}
                            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Try again
                        </button>
                        <button
                            onClick={() => window.history.back()}
                            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Go back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
