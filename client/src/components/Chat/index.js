import React from 'react';
import { SendMessage } from '../SendMessage';
import { ListMessages } from '../ListMessages';

import './Chat.css';

/**
 * Chat component
 */
export function Chat() {
    return (
        <div className="Chat container">
            <ListMessages />
            <SendMessage className="Chat__Send" />
        </div>
    );
}