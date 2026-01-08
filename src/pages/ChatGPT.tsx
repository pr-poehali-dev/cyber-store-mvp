import { ChatGPTPlaygroundPage } from "@/components/extensions/chatgpt-polza/ChatGPTPlaygroundPage";

const API_URL = "https://functions.poehali.dev/8a269e50-47e5-4511-88de-a8ed8cce6932";

export default function ChatGPT() {
  return (
    <ChatGPTPlaygroundPage
      apiUrl={API_URL}
      defaultModel="openai/gpt-4o-mini"
    />
  );
}
