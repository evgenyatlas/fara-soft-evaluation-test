import { useStore } from 'effector-react';
import React from 'react';
import chat from '../../modules/chat/chat';
import { Message } from '../Message';

import './ListMessages.css';

/**
 * ListMessages component 
 * Displaying a list of messages from the store (Effector)
 */
export function ListMessages() {
    const messages = useStore(chat.messages.$store);
    return (
        <div className="ListMessages">
            {
                messages.map((message) =>
                    <Message key={message.id} {...message} />
                )
            }
        </div>
    );
}

