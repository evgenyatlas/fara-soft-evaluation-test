import { io } from "socket.io-client";

/**
 * Wrapper around socket.io 
 */
export default class Connect {
    #socket
    #serverUrl
    constructor(serverUrl) {
        this.#serverUrl = serverUrl;
    }
    /**
     * connect to the server and wait for successful response
     * @returns {Promise} Promise
     */
    async init() {
        return new Promise((res, rej) => {
            this.#socket = io(this.#serverUrl);
            this.#socket.once('connect', function () {
                res();
            });
            this.#socket.on('connect_error', e => {
                rej(e);
            });
        });
    }
    /**
    * request -> response (request and wait for a response)
    * @param {string} event 
    * @param {any} data 
    * @returns {Promise} Promise
    */
    async req(event, data) {
        return new Promise((res, rej) => {
            this.#socket.emit(event, data);
            this.take(event)
                .then(res)
                .catch(rej);
        });
    }
    /**
    * Promise over once
    * @param {object} socket 
    * @param {string} event 
    * @returns {Promise} Promise
    */
    async take(event) {
        return new Promise((res, rej) => {
            this.#socket.once(event, (data) => {
                if (data && data.error) return rej(data.error);
                res(data);
            });
            this.#socket.once('disconnect', () => {
                rej(new Error({ code: 500, message: 'Ошибка подключения' }));
            });
        });
    }
    close() {
        this.#socket.removeAllListeners();
        this.#socket.close();
    }
    on(event, fn) {
        this.#socket.on(event, fn);
    }
    emit(event, data) {
        this.#socket.emit(event, data);
    }
}