"use client";

import { create } from "zustand";

import type { TbenefitContext, TworkflowStatus, TchatMessage, TbenefitResult, TdiscoveryQuestion} from "@repo/middleware/types";

type AISessionState = {
  isDrawerOpen: boolean;
  context?: TbenefitContext;
  messages: TchatMessage[];
  workflowStatus: TworkflowStatus;
  currentQuestion?: TdiscoveryQuestion;
  answers: Record<string, string>;
  result?: TbenefitResult;
  loading: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  setContext: (context: TbenefitContext) => void;
  addMessage: (message: Omit<TchatMessage, "id" | "timestamp">) => void;
  setQuestion: (question?: TdiscoveryQuestion) => void;
  saveAnswer: (key: string, value: string) => void;
  setWorkflowStatus: (status: TworkflowStatus) => void;
  setLoading: (loading: boolean) => void;
  setResult: (result?: TbenefitResult) => void;
  resetSession: () => void;
};

export const useAISessionStore = create<AISessionState>((set) => ({
  isDrawerOpen: false,
  messages: [],
  workflowStatus: "idle",
  answers: {},
  loading: false,
  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),
  setContext: (context) => set({ context }),
  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...message,
          id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
          timestamp: Date.now(),
        },
      ],
    })),
  setQuestion: (question) => set({ currentQuestion: question }),
  saveAnswer: (key, value) =>
    set((state) => ({ answers: { ...state.answers, [key]: value } })),
  setWorkflowStatus: (status) => set({ workflowStatus: status }),
  setLoading: (loading) => set({ loading }),
  setResult: (result) => set({ result }),
  resetSession: () =>
    set({
      messages: [],
      workflowStatus: "idle",
      currentQuestion: undefined,
      answers: {},
      result: undefined,
      loading: false,
    }),
}));
