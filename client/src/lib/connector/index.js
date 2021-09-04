import { io } from "socket.io-client";

/**
 * Wrapper around socket.io 
 */
export default class Connector {
    #socket
    #serverUrl
    constructor(serverUrl) {
        this.#serverUrl = serverUrl;
    }
    /**
     * connect to the server
     * @param {Function} onSuccess - will be called when connecting
     * @returns {Function} onError - will be called when error
     */
    connect(onSuccess, onError) {
        this.#socket = io(this.#serverUrl);
        this.#socket.on('connect', onSuccess);
        this.#socket.on('connect_error', onError);
        this.#socket.on('disconnect', onError);
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
                rej(new Error('Ошибка подключения'));
            });
        });
    }
    close() {
        this.#socket.removeAllListeners();
        this.#socket.close();
    }
    /**
     * subscribe to event
     * @param {string} event 
     * @param {Function} fn 
     */
    on(event, fn) {
        this.#socket.on(event, fn);
    }
    /**
     * unsubscribe to event
     * @param {string} event 
     * @param {Function} fn 
     */
    off(event, fn) {
        this.#socket.off(event, fn);
    }
    /**
     * emit
     * @param {string} event 
     * @param {Any} fn 
     */
    emit(event, data) {
        this.#socket.emit(event, data);
    }
}