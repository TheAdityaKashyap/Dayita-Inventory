import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        if (inputValue.trim() === '') return;

        const newMessage = { sender: 'user', text: inputValue };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setInputValue('');

        // Simulate bot response
        setTimeout(() => {
            const botResponse = { sender: 'bot', text: `You said: ${inputValue}` };
            setMessages((prevMessages) => [...prevMessages, botResponse]);
        }, 1000);
    };

    useEffect(() => {
        // Scroll to the bottom of the message list
        const messageList = document.getElementById('message-list');
        if (messageList) {
            messageList.scrollTop = messageList.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="chat-container">
            <MessageList messages={messages} />
            <div className="input-area">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') handleSendMessage();
                    }}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;