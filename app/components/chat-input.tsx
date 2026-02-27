"use client"

import { FormEvent, useState } from "react"

type Props = {
    onSubmit: (value: string) => void
    options?: string[]
    inputType: "text" | "number" | "options"
}

export default function ChatInput({ onSubmit, options, inputType }: Props) {
    const [value, setValue] = useState("")

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        if (!value.trim()) return
        onSubmit(value)
        setValue("")
    }

    if (inputType === "options" && options?.length) {
        return (
            <div className="mt-3 grid grid-cols-2 gap-2">
                {options.map((option) => (
                    <button
                        key={option}
                        onClick={() => onSubmit(option)}
                        className="              rounded-lg border border-border bg-muted/40
              px-3 py-2 text-left text-sm font-medium
              text-foreground
              transition
              hover:bg-muted
              focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                        {option}
                    </button>
                ))}
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
            <input
                type={inputType === "number" ? "number" : "text"}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Type your answer"
                className="flex-1 rounded-lg border border-border
          bg-background px-3 py-2 text-sm
          text-foreground placeholder:text-muted-foreground
          outline-none
          focus:ring-2 focus:ring-primary/40"
            />

      <button
        type="submit"
        disabled={!value.trim()}
        className="
          rounded-lg bg-primary px-4 py-2
          text-sm font-medium text-primary-foreground
          transition
          hover:opacity-90
          disabled:opacity-50 disabled:cursor-not-allowed
        ">
                Send
            </button>
        </form>
    )
}