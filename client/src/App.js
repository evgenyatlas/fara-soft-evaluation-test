import React from 'react';
import { ChatInfo } from './components/ChatInfo';
import { ToastContainer } from 'react-toastify';
import { Chat } from './components/Chat';
import { Login } from './components/Login';
import Connector from './lib/connector';
import chat from './modules/chat/chat';
import config from './config';
import { showError } from './lib/showError';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

export default class App {
    init() {
        const connector = new Connector(config('SERVER_URL'));
        //init chat
        chat.init(connector);
        //Connect to server and start chat
        connector.connect(
            //callback on success
            chat.start,
            //callback on error
            () => {
                showError(new Error('Повторное подключение к серверу'), 1000);
                chat.stop();
            }
        );
    }
    Component() {
        return (
            <div className="App">
                <ChatInfo />
                <Chat />
                <Login />
                <ToastContainer />
            </div>
        );
    }
}