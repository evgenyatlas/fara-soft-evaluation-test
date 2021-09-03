class User {
    name
    socket
    constructor(name, socket) {
        this.name = name
        this.socket = socket
    }
    emit(event, data) {
        this.socket.emit(event, data)
    }
}

module.exports = User