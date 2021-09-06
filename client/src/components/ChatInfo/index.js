import React from 'react';
import { declOfNum } from '../../lib/declOfNum';
import { User } from '../User';
import { ShareLinkBtn } from '../ShareLinkBtn';

import './ChatInfo.css';
import { useChatId } from '../../modules/chat/hooks/useChatId';
import { useUsers } from '../../modules/chat/hooks/useUsers';


/**
 * ChatInfo component (Displaying users in chat and chat ID)
 */
//TODO: split into multiple components
export function ChatInfo() {
    const id = useChatId();
    const users = useUsers();
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
                    {
                        users.map((user) =>
                            <User key={user.name} {...user}></User>
                        )
                    }
                </div>
                <ShareLinkBtn className="ChatInfo__Share" />
            </div>
        </div>
    );
}