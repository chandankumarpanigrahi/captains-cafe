"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import chatbotData from '@/data/chatbotData';
import './chatbot.css';
import logo from "../../../assets/images/logo.png";

// Parse **bold** markdown in messages
const formatMessage = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
};

const Chatbot = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [chatHistory, setChatHistory] = useState([]);
    const [currentNodeId, setCurrentNodeId] = useState('welcome');
    const [isTyping, setIsTyping] = useState(false);
    const [formText, setFormText] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = useCallback(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory, isTyping, scrollToBottom]);

    // Initialize with welcome message
    useEffect(() => {
        if (isOpen && chatHistory.length === 0) {
            const welcomeNode = chatbotData['welcome'];
            setChatHistory([{ type: 'bot', nodeId: 'welcome', message: welcomeNode.message }]);
        }
    }, [isOpen, chatHistory.length]);

    const handleOptionClick = (option) => {
        const nextNode = chatbotData[option.next];
        if (!nextNode) return;

        // Add user choice
        setChatHistory(prev => [...prev, { type: 'user', message: option.label }]);

        // Show typing indicator
        setIsTyping(true);
        setFormSubmitted(false);
        setFormText('');

        setTimeout(() => {
            setIsTyping(false);
            setCurrentNodeId(nextNode.id);
            setChatHistory(prev => [...prev, { type: 'bot', nodeId: nextNode.id, message: nextNode.message }]);
        }, 500 + Math.random() * 400);
    };

    const handleBackClick = () => {
        const currentNode = chatbotData[currentNodeId];
        if (!currentNode || !currentNode.parent) return;

        const parentNode = chatbotData[currentNode.parent];
        setChatHistory(prev => [...prev, { type: 'user', message: '← Back' }]);

        setIsTyping(true);
        setFormSubmitted(false);
        setFormText('');

        setTimeout(() => {
            setIsTyping(false);
            setCurrentNodeId(parentNode.id);
            setChatHistory(prev => [...prev, { type: 'bot', nodeId: parentNode.id, message: parentNode.message }]);
        }, 300);
    };

    const handleReset = () => {
        setChatHistory([]);
        setCurrentNodeId('welcome');
        setFormSubmitted(false);
        setFormText('');
        setTimeout(() => {
            const welcomeNode = chatbotData['welcome'];
            setChatHistory([{ type: 'bot', nodeId: 'welcome', message: welcomeNode.message }]);
        }, 100);
    };

    const handleFormSubmit = () => {
        if (!formText.trim()) return;

        setChatHistory(prev => [
            ...prev,
            { type: 'user', message: formText }
        ]);

        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            setChatHistory(prev => [
                ...prev,
                { type: 'bot', nodeId: 'form_success', message: "Thank you for your message! ✅ Our team will review it and get back to you soon. You can also reach us directly on our Contact page." }
            ]);
            setFormSubmitted(true);
            setFormText('');
        }, 600);
    };

    const currentNode = chatbotData[currentNodeId];

    const renderAction = (action) => {
        if (!action) return null;

        switch (action.type) {
            case 'link':
                if (action.external) {
                    return (
                        <a
                            href={action.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="chatbot-action-btn chatbot-action-link"
                        >
                            {action.label}
                        </a>
                    );
                }
                return (
                    <Link href={action.url} className="chatbot-action-btn chatbot-action-link">
                        {action.label}
                    </Link>
                );

            case 'phone':
                return (
                    <a
                        href={`tel:${action.number.replace(/\s/g, '')}`}
                        className="chatbot-action-btn chatbot-action-phone"
                    >
                        {action.label}
                    </a>
                );

            case 'form':
                if (formSubmitted) {
                    return (
                        <div className="chatbot-form-success">
                            ✅ Message sent! We&apos;ll get back to you soon.
                        </div>
                    );
                }
                return (
                    <div className="chatbot-form">
                        <textarea
                            value={formText}
                            onChange={(e) => setFormText(e.target.value)}
                            placeholder="Type your message here..."
                            rows={3}
                        />
                        <div className="chatbot-form-actions">
                            <button
                                className="chatbot-form-submit"
                                onClick={handleFormSubmit}
                                disabled={!formText.trim()}
                            >
                                Send Message
                            </button>
                            <Link href="/contact" className="chatbot-form-contact">
                                Contact Page →
                            </Link>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <>
            {/* Chat Window */}
            <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
                {/* Header */}
                <div className="chatbot-header">
                    <div className="chatbot-header-left">
                        <Image
                            src={logo}
                            className='p-1 bg-white rounded-full'
                            width={36}
                            height={36}
                            alt="Logo"
                        />
                        <div className="chatbot-header-info">
                            <h4>Captain&apos;s Cafe</h4>
                            <span>
                                <span className="chatbot-status-dot"></span>
                                Online | Ask us anything
                            </span>
                        </div>
                    </div>
                    <div className="chatbot-header-actions">
                        <button className="chatbot-header-btn" onClick={handleReset} title="Restart Chat">
                            ↻
                        </button>
                        <button className="chatbot-header-btn" onClick={() => setIsOpen(false)} title="Close">
                            ✕
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="chatbot-messages">
                    {chatHistory.map((msg, index) => (
                        <div
                            key={index}
                            className={msg.type === 'bot' ? 'chatbot-bubble' : 'chatbot-user-bubble'}
                        >
                            {formatMessage(msg.message)}
                        </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                        <div className="chatbot-typing">
                            <div className="chatbot-typing-dot"></div>
                            <div className="chatbot-typing-dot"></div>
                            <div className="chatbot-typing-dot"></div>
                        </div>
                    )}

                    {/* Current Options */}
                    {!isTyping && currentNode && currentNode.options && (
                        <div className="chatbot-options">
                            {currentNode.options.map((option, index) => (
                                <button
                                    key={index}
                                    className="chatbot-option-btn"
                                    onClick={() => handleOptionClick(option)}
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Current Action (link/phone/form) */}
                    {!isTyping && currentNode && currentNode.action && renderAction(currentNode.action)}

                    {/* Back Button */}
                    {!isTyping && currentNode && currentNode.parent && (
                        <button className="chatbot-back-btn" onClick={handleBackClick}>
                            ← Go Back
                        </button>
                    )}

                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Toggle Button */}
            <button
                className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open chat"
            >
                {isOpen ? '✕' : '💬'}
            </button>
        </>
    );
};

export default Chatbot;
