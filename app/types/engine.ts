export type WorkflowStatus = "idle" | "discovering" | "running" | "completed"

export type ChatRole = "assistant" | "user" | "system"

export type ChatMessage = {
  id: string
  role: ChatRole
  content: string
  timestamp: number
}

export type DiscoveryQuestion = {
  questionid: string
  question: string
  options?: string[]
  inputType: "text" | "number" | "options"
  key: string
}

export type BenefitResult = {
  analysis: string
  score: number
  recommendation: string
  northStarAction: string
}
