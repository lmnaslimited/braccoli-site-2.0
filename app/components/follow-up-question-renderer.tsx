import { TbenefitChat } from "@repo/middleware/types";

export default function FollowUpQuestionRenderer({
    iaQuestions, idContent
}: {
    iaQuestions: Array<{ id: string; prompt: string }>, idContent: TbenefitChat | null
}) {
    if (!iaQuestions.length) return null

    return (
        <div className="space-y-2 rounded-lg border border-amber-200 bg-amber-50 p-3">
            <p className="text-xs font-semibold uppercase text-amber-700">{idContent?.followUpTitle ?? "Follow-up questions"}</p>
            {iaQuestions.map((idQuestion) => (
                <p key={idQuestion.id} className="text-sm text-amber-900">• {idQuestion.prompt}</p>
            ))}
        </div>
    )
}