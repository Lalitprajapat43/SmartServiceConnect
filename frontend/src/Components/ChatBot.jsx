import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { generateGeminiResponse } from "../Api/gemini.js";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! 👋 How can I assist you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messageEndRef = useRef(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    setLoading(true);

    const botReply = await generateGeminiResponse(input);

    setMessages((prev) => [
      ...prev,
      { text: botReply, sender: "bot" }
    ]);

    setLoading(false);
  };

  return (
    <>
      {/* Floating Icon Button */}
      {!isOpen && (
        <button
          className="fixed bottom-6 right-6 bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle size={30} />
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 bg-white shadow-xl rounded-xl border flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="bg-teal-600 text-white p-3 flex justify-between items-center">
            <h3 className="font-semibold">Smart Support Assistant</h3>
            <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>

          {/* Messages */}
          <div className="p-3 h-72 overflow-y-auto space-y-3 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[85%] ${
                  msg.sender === "user"
                    ? "bg-teal-100 ml-auto"
                    : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
            
            {loading && (
              <div className="bg-gray-200 p-2 rounded-lg w-20 animate-pulse">
                Typing...
              </div>
            )}

            <div ref={messageEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-3 flex items-center gap-2 border-t bg-gray-50">
            <input
              type="text"
              placeholder="Write message..."
              className="w-full outline-none text-sm border p-2 rounded-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700"
              onClick={sendMessage}
            >
              <Send size={18} />
            </button>
          </div>

        </div>
      )}
    </>
  );
}
