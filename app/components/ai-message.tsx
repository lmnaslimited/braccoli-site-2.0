import {TchatMessage} from "@repo/middleware/types"

export default function AIMessage({ message }: { message: TchatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex w-full mb-3 ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[70%] rounded-xl px-4 py-2 text-sm leading-relaxed border
          ${
            isUser
              ? "bg-neutral-900 text-white border border-neutral-700"
              : "bg-gray-100 text-gray-900 dark:bg-neutral-600 dark:text-gray-100 dark:border dark:border-neutral-600"
          }
        `}
      >
        {message.content}
      </div>
    </div>
  );
}