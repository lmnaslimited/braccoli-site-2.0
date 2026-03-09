"use client";

import { create } from "zustand";

import type { TbenefitContext, TworkflowStatus, TchatMessage, TbenefitResult, TdiscoveryQuestion} from "@repo/middleware/types";

type TaisessionState = {
  isDrawerOpen: boolean;
  idContext?: TbenefitContext;
  LaMessages: TchatMessage[];
  LWorkflowStatus: TworkflowStatus;
  LdCurrentQuestion?: TdiscoveryQuestion;
  LdAnswers: Record<string, string>;
  LdResult?: TbenefitResult;
  isLoading: boolean;
  fnOpenDrawer: () => void;
  fnCloseDrawer: () => void;
  fnSetContext: (context: TbenefitContext) => void;
  fnAddMessage: (message: Omit<TchatMessage, "id" | "timestamp">) => void;
  fnSetQuestion: (question?: TdiscoveryQuestion) => void;
  fnSaveAnswer: (key: string, value: string) => void;
  fnSetWorkflowStatus: (status: TworkflowStatus) => void;
  fnSetLoading: (isLoading: boolean) => void;
  fnSetResult: (result?: TbenefitResult) => void;
  fnResetSession: () => void;
};

export const useAISessionStore = create<TaisessionState>((set) => ({
  isDrawerOpen: false,
  LaMessages: [],
  LWorkflowStatus: "idle",
  LdAnswers: {},
  isLoading: false,
  fnOpenDrawer: () => set({ isDrawerOpen: true }),
  fnCloseDrawer: () => set({ isDrawerOpen: false }),
  fnSetContext: (idContext) => set({ idContext }),
  fnAddMessage: (message) =>
    set((state) => ({
      LaMessages: [
        ...state.LaMessages,
        {
          ...message,
          id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
          timestamp: Date.now(),
        },
      ],
    })),
  fnSetQuestion: (question) => set({ LdCurrentQuestion: question }),
  fnSaveAnswer: (key, value) =>
    set((state) => ({ LdAnswers: { ...state.LdAnswers, [key]: value } })),
  fnSetWorkflowStatus: (status) => set({ LWorkflowStatus: status }),
  fnSetLoading: (isLoading) => set({ isLoading }),
  fnSetResult: (result) => set({ LdResult: result }),
  fnResetSession: () =>
    set({
      LaMessages: [],
      LWorkflowStatus: "idle",
      LdCurrentQuestion: undefined,
      LdAnswers: {},
      LdResult: undefined,
      isLoading: false,
    }),
}));
