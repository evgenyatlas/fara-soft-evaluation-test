const { uid } = require("../../lib/uid")

class Message {
    id
    user
    text
    time
    constructor(user, text) {
        this.id = uid();
        this.user = user;
        this.text = text;
        this.time = Date.now();
    }
};

module.exports = Message