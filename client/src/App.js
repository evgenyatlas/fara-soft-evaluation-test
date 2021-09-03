import React from 'react';
import { ChatInfo } from './components/ChatInfo';
import { ToastContainer } from 'react-toastify';
import { Chat } from './components/Chat';
import { Login } from './components/Login';
import Connect from './lib/io/connect';
import chat from './modules/chat/chat';
import config from './config';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

export default class App {
    #connect
    async init() {
        //Connect to the server
        this.#connect = new Connect(config('SERVER_URL'));
        await this.#connect.init();
        chat.init(this.#connect);
        this.#connect.on('error', this.handleErrors);
    }
    handleErrors(error) {
        console.error(error);
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