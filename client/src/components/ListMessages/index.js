import React, { useState } from 'react';
import { Message } from '../Message';

import './ListMessages.css';

export function ListMessages() {
    const [list, setList] = useState([])
    return (
        <div className="ListMessages">
            {list.reverse().map((i) => <Message user={{ nickname: "Evgeny", color: "red" }} text={i + "DWDWD wDWdwdw dwdwdwd"} time={new Date() - 1000 * 60} />)}
        </div>
    );
}