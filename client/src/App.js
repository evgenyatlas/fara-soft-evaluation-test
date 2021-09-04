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
        //Create a connector (wrapper around socket.io)
        const connector = new Connector(config('SERVER_URL'));
        //init chat
        chat.init(connector);
        //Connect to server
        connector.connect(
            //start the chat if connection is successful
            chat.start,
            //stop chat if connection fails
            () => {
                showError(new Error('Ошибка подключения к серверу'), 1000);
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