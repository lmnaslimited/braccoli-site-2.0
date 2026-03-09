export async function fnRunBenefitWorkflow(iPayload: Record<string, unknown>) {
  const LWebhookUrl = process.env.N8N_BENEFIT_WEBHOOK_URL
  const LApiKey = process.env.N8N_API_KEY
  if (!LWebhookUrl) {
    throw new Error("n8n_not_configured")
  }

  const response = await fetch(LWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(LApiKey ? { "x-api-key": LApiKey } : {}),
    },
    body: JSON.stringify(iPayload),
  })

  if (!response.ok) {
    throw new Error("n8n_request_failed")
  }

  return (await response.json()) as unknown
}
