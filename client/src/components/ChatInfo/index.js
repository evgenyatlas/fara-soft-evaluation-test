import { useStore } from 'effector-react';
import React from 'react';
import chat from '../../features/chat/chat';
import { declOfNum } from '../../lib/declOfNum';
import { User } from '../User';
import { ShareLinkBtn } from '../ShareLinkBtn';

import './ChatInfo.css';

export function ChatInfo({ }) {
    const id = useStore(chat.id.$store)
    const users = [1, 2];
    return (
        <div className="ChatInfo">
            <div className="container">
                <div className="ChatInfo__Info">
                    <div className="ChatInfo__InfoName">Id: {id}</div>
                    <span className="ChatInfo__InfoNumber">
                        {users.length} {declOfNum(users.length, ['участник', 'участника', 'участников'])}
                    </span>
                </div>
                <div className="ChatInfo__ListUsers">
                    <User nickname="WDwdwd" color="#72d5fd"></User>
                    <User nickname="WDwdwd" color="#72d5fd"></User>
                </div>
                <ShareLinkBtn className="ChatInfo__Share" />
            </div>
        </div>
    )
}