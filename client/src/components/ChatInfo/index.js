import { useStore } from 'effector-react';
import React from 'react';
import chat from '../../modules/chat/chat';
import { declOfNum } from '../../lib/declOfNum';
import { User } from '../User';
import { ShareLinkBtn } from '../ShareLinkBtn';

import './ChatInfo.css';
import { obj2list } from '../../lib/obj2list';


/**
 * ChatInfo component (Displaying users in chat and chat ID)
 */
export function ChatInfo() {
    const id = useStore(chat.id.$store);
    //transform the dictionary into a list
    const users = obj2list(useStore(chat.users.$store));
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
                        users.map(({ name, color }) =>
                            <User key={name} nickname={name} color={color}></User>
                        )
                    }
                </div>
                <ShareLinkBtn className="ChatInfo__Share" />
            </div>
        </div>
    )
}