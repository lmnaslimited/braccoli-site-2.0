export default function ResultSummaryRenderer({
  result,
}: {
  result?: { summary: string; score?: number; recommendation?: string };
}) {
  if (!result) return null;

  return (
    <div
      className="
        space-y-2 rounded-xl border p-4 text-sm shadow-sm
        bg-emerald-50 border-emerald-200 text-emerald-900
        dark:bg-emerald-900/20 dark:border-emerald-700 dark:text-emerald-100
      "
    >
      <p className="font-semibold text-base">
        Result Summary
      </p>

      <p className="leading-relaxed">
        {result.summary}
      </p>

      {typeof result.score === "number" && (
        <p className="text-sm opacity-90">
          <span className="font-medium">Score:</span> {result.score}
        </p>
      )}

      {result.recommendation && (
        <p className="text-sm opacity-90">
          <span className="font-medium">Recommendation:</span>{" "}
          {result.recommendation}
        </p>
      )}
    </div>
  );
}