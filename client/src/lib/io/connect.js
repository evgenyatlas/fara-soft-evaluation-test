import { io } from "socket.io-client";

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
        })
    }

}