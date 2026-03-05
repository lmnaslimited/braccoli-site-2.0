import { ChatMessage } from "../types/ai-engine";

export default function AIMessage({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed

          ${
            isUser
              ? "bg-blue-600 text-white dark:bg-blue-500"
              : "bg-gray-100 text-gray-900 dark:bg-neutral-800 dark:text-gray-100 dark:border dark:border-neutral-700"
          }
        `}
      >
        {message.content}
      </div>
    </div>
  );
}