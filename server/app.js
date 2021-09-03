const Chat = require('./features/chat/chat')
const User = require('./features/user/user')

class App {
    #io
    #chats = new Map()
    constructor(io) {
        this.#io = io
    }
    init() {
        this.#io.on('connection', async (socket) => {
            socket.on('join', this.joinChat.bind(this, socket))
        })
    }
    joinChat(socket, { userName, chatId }) {
        if (!this.#chats.has(chatId)) this.#chats.set(chatId, new Chat())
        const chat = this.#chats.get(chatId)

        const user = new User(userName, socket)

        chat.addUser(user)
    }
}

module.exports = App
