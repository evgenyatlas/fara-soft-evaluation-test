class Message {
    user
    text
    time
    constructor(user, text) {
        this.user = user
        this.text = text
        this.time = Date.now()
    }
}

module.exports = Message