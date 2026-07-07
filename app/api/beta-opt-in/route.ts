import { NextRequest, NextResponse } from "next/server"
import { validateRecaptcha } from "@repo/ui/api/newsletter/recaptcha"

export async function POST(req: NextRequest) {
    const body = await req.json()

    const result = await validateRecaptcha(body.recaptchaToken)

    if (!result.success) {
        return NextResponse.json(
            {
                message: result.message,
            },
            {
                status: 403,
            }
        )
    }

    return NextResponse.json({
        success: true,
    })
}