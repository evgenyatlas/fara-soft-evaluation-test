import { useStore } from 'effector-react';
import React from 'react';
import chat from '../../modules/chat/chat';
import { Message } from '../Message';

import './ListMessages.css';

export function ListMessages() {
    const messages = useStore(chat.messages.$store);
    return (
        <div className="ListMessages">
            {messages.map((message) => <Message key={message.id} {...message} />)}
        </div>
    );
}

