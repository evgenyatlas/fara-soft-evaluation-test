import React from 'react';
import { useMessages } from '../../modules/chat/hooks/useMessages';
import { Message } from '../Message';

import './ListMessages.css';

/**
 * ListMessages component 
 * Displaying a list of messages from the store (Effector)
 */
export function ListMessages() {
    const messages = useMessages();
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

