// src/components/Chat.jsx (or src/pages/Chat.jsx)
import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';

const predefinedUsers = [
    { id: 'user1', name: 'Alice' },
    { id: 'user2', name: 'Bob' },
    { id: 'user3', name: 'Charlie' },
    { id: 'user4', name: 'Diana' },
    { id: 'user5', name: 'Eve' }
];

const Chat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Welcome to our simulated group chat!", senderId: 'bot', senderName: 'Chat Bot' }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    // State to keep track of the current "active" sender
    const [activeSenderId, setActiveSenderId] = useState(predefinedUsers[0].id);

    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
    };

    const handleSendMessage = () => {
        const trimmedMessage = inputMessage.trim();
        if (trimmedMessage) {
            const activeSender = predefinedUsers.find(user => user.id === activeSenderId);
            if (!activeSender) {
                console.error("Active sender not found!");
                return;
            }

            // Add the message from the currently active sender
            const newSenderMessage = {
                id: messages.length + 1,
                text: trimmedMessage,
                senderId: activeSender.id,
                senderName: activeSender.name
            };
            setMessages((prevMessages) => [...prevMessages, newSenderMessage]);
            setInputMessage('');

            // Optional: Simulate a "response" from another random user
            // This makes it feel more like a group chat
            setTimeout(() => {
                const otherUsers = predefinedUsers.filter(user => user.id !== activeSenderId);
                if (otherUsers.length > 0) {
                    const randomUser = otherUsers[Math.floor(Math.random() * otherUsers.length)];
                    const randomResponse = {
                        id: messages.length + 2,
                        text: `( ${randomUser.name}): Got it, "${trimmedMessage.substring(0, 20)}..."`,
                        senderId: randomUser.id,
                        senderName: randomUser.name
                    };
                    setMessages((prevMessages) => [...prevMessages, randomResponse]);
                }
            }, 1200); // Slightly longer delay for group simulation
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h3>Simulated Group Chat</h3>
                {/* Dropdown to select "who you are" */}
                <select
                    className="sender-select"
                    value={activeSenderId}
                    onChange={(e) => setActiveSenderId(e.target.value)}
                >
                    {predefinedUsers.map(user => (
                        <option key={user.id} value={user.id}>
                            Chatting as: {user.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="chat-messages">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        // Assign different classes based on senderId for styling flexibility
                        className={`message ${message.senderId === activeSenderId ? 'user-self' : (message.senderId === 'bot' ? 'bot' : 'other-user')}`}
                    >
                        <span className="sender-name">{message.senderName}: </span>
                        {message.text}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="chat-input-area">
                <input
                    type="text"
                    id="messageInput"
                    placeholder={`Type a message as ${predefinedUsers.find(user => user.id === activeSenderId)?.name || 'you'}...`}
                    value={inputMessage}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <button id="sendMessageBtn" onClick={handleSendMessage}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;