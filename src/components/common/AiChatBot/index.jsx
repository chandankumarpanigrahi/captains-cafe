"use client";

import { useState } from "react";

const chatbotFrameId = "captains-cafe-ai-chatbot";

const AiChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed right-4 bottom-4 z-[250] md:right-8 md:bottom-8" title="Ask Ema">
            <div className="relative flex items-end justify-end">
            <div
                className={`absolute right-0 bottom-20 origin-bottom-right overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.2)] transition-all duration-300 ease-out dark:border-slate-700 dark:bg-slate-900 ${
                    isOpen
                        ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                        : "pointer-events-none translate-y-6 scale-95 opacity-0"
                }`}
                aria-hidden={!isOpen}
            >
                <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-4 py-3 dark:border-slate-700">
                    <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                            The Captain's Cafe Chat
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            Ask us anything
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors duration-200 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                        aria-label="Close chat"
                    >
                        ✕
                    </button>
                </div>

                <div id={chatbotFrameId} className="h-[70vh] min-h-[520px] max-h-[700px] w-[92vw] max-w-[380px]">
                    <iframe
                        src="https://www.chatbase.co/chatbot-iframe/Ac7CQHNO341GRNgLs4OVi"
                        className="h-full w-full"
                        frameBorder="0"
                        title="Captain's Cafe AI Chatbot"
                        loading="lazy"
                    />
                </div>
            </div>

            <button
                type="button"
                onClick={() => setIsOpen((previous) => !previous)}
                aria-expanded={isOpen}
                aria-controls={chatbotFrameId}
                aria-label={isOpen ? "Close chat" : "Open chat"}
                className={`flex h-12 w-12 items-center justify-center rounded-full bg-[#0c3c6a] text-white shadow-[0_18px_45px_rgba(12,60,106,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#14528d] ${
                    isOpen ? "scale-95" : "scale-100"
                }`}
            >
                <span
                    className={`text-2xl leading-none transition-transform duration-300 ${
                        isOpen ? "rotate-90" : "rotate-0"
                    }`}
                >
                    {isOpen ? "✕" : "💬"}
                </span>
            </button>
            </div>
        </div>
    );
};

export default AiChatBot;
