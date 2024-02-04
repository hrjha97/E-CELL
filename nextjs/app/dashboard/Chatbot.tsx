"use client";

import React, { useEffect, useState, useRef } from "react";
import { Switch } from "./Switch";
import { QnARetrival } from "../api/QnARetrival";
import Loading from "@/components/Loading";

interface Message {
  text: string;
  sender: "user" | "bot";
}

interface ChatbotProps {
  qnaData: any[];
}

const Chatbot: React.FC<ChatbotProps> = ({ qnaData }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [webSearch, setWebSearch] = useState(false);

  typeof localStorage !== 'undefined' ? localStorage.getItem('userId') : null;

  const populateChatHistory = () => {
    const newMessages: Message[] = qnaData
      .map((data) => [
        { text: data.question, sender: "user" },
        { text: data.answer, sender: "bot" },
      ])
      .flat() as Message[];

    setMessages(newMessages);
    scrollToBottom();
  };

  useEffect(() => {
    populateChatHistory();
  }, [qnaData]);
  console.log(webSearch)
  const handleSendMessage = async () => {
    if (newMessage.trim() === "" || loading) return;

    // Update chat history with the user's message
    const userMessage: Message = { text: newMessage, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setNewMessage("");
    setDisableSubmit(true);

    // Scroll to bottom after updating messages
    scrollToBottom();

    // Simulate bot response after a delay
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("User Id is not identified!");
        return;
      }

      setLoading(true);

      const botResponse = await QnARetrival({
        prompt: newMessage,
        studentId: userId,
        websearch: webSearch,
      });

      console.log(botResponse);
      const botMessage: Message = { text: botResponse.text, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
      setDisableSubmit(false);
    }
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 max-h-[calc(100vh-50px)]"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-900 text-white"
                  : "bg-sky-600"
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>

      <div className="p-4">
        <div className="flex">
        <Switch setWebSearch={setWebSearch} />
          <input
            type="text"
            className="flex-1 border p-2 mr-2"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-black"
            onClick={handleSendMessage}
            disabled={disableSubmit}
          >
            {loading?<Loading />:(<div>Send  &#10145;</div>)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
