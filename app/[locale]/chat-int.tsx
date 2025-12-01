"use client";

import { useEffect } from "react";
import { createChat } from "@n8n/chat";
import "@n8n/chat/style.css";

export default function ChatInit() {
  useEffect(() => {
   createChat({
	webhookUrl: process.env.NEXT_PUBLIC_WEBHOOK_URL,
	webhookConfig: {
		method: 'POST',
		headers: {}
	},
	mode: 'window',
	chatInputKey: 'chatInput',
	chatSessionKey: 'sessionId',
	loadPreviousSession: true,
	metadata: {},
	showWelcomeScreen: false,
	defaultLanguage: 'en',
});                                                             
  }, []);

  return null;
}

