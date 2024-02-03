// Chatbot.tsx
"use client"
import React, { useState } from 'react';
import { Switch } from './Switch';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: newMessage, sender: 'user' },
    ]);

    setNewMessage('');

    // Simulate bot response after a delay
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Bot response', sender: 'bot' },
      ]);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 max-h-[calc(100vh-50px)]">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.sender === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>

      <div className="p-4">
       
        <div className="flex">
          <input
            type="text"
            className="flex-1 border p-2 mr-2"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
