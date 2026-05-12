import { TbenefitChat } from "@repo/middleware/types";

export default function ResultSummaryRenderer({
  idResult, idContent
}: {
  idResult?: { summary: string; score?: number; recommendation?: string }, idContent:TbenefitChat | null;
}) {
  if (!idResult) return null;

  return (
    <div
      className="
        space-y-2 rounded-xl border p-4 text-md shadow-sm
        bg-emerald-50 border-emerald-200 text-emerald-900
        dark:bg-emerald-900/20 dark:border-emerald-700 dark:text-emerald-100
      "
    >
      <p className="font-semibold text-base">
      {idContent?.result ?? "Result Summary"}
      </p>

      <p className="leading-relaxed">
        {idResult.summary}
      </p>

      {typeof idResult.score === "number" && (
        <p className="text-md opacity-90">
          <span className="font-medium">{idContent?.scroreText ?? "Score"}:</span> {idResult.score}
        </p>
      )}

      {idResult.recommendation && (
        <p className="text-md opacity-90">
          <span className="font-medium">{idContent?.recommendationText ?? "Recommendation"}:</span>{" "}
          {idResult.recommendation}
        </p>
      )}
    </div>
  );
}