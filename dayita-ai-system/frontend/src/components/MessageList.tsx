import React from 'react';
import { Message } from '../../shared/types/message';

interface MessageListProps {
    messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    return (
        <div className="message-list">
            {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                    <div className="message-content">
                        <strong>{message.sender === 'user' ? 'You' : 'AI'}:</strong> {message.text}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MessageList;