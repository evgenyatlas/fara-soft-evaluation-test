const randomFlatColors = require("random-flat-colors");

class User {
    name
    #socket
    color
    constructor(name, socket) {
        this.name = name;
        this.#socket = socket;
        this.color = randomFlatColors();
    }
    on(event, fn) {
        this.#socket.on(event, fn);
    }
    emit(event, data) {
        this.#socket.emit(event, data);
    }
    remove() {
        this.#socket.removeAllListeners()
    }
}

module.exports = User