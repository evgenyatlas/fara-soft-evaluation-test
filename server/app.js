const Chat = require('./features/chat/chat')
const User = require('./features/user/user')
const { uid } = require('./lib/uid')

class App {
    #io
    #chats = new Map()
    /**
     * @param {Socket} io 
     */
    constructor(io) {
        this.#io = io
    }
    init() {
        this.#io.on('connection', async (socket) => {
            /*** Socket event handlers ***/
            //I am using bind to bind context and currying
            socket.on('join', this.#joinChat.bind(this, socket));
        })
    }
    /**
     * 
     * @param {socket} socket 
     * @param {string} data.userName 
     * @param {(string || null)} data.chatId 
     */
    #joinChat(socket, { userName, chatId }) {
        //If ChatId is not passed, then we generate
        chatId = chatId || uid()
        //If the chat does not exist, then create new 
        if (!this.#chats.has(chatId))
            this.#chats.set(chatId, new Chat(chatId))

        const chat = this.#chats.get(chatId)

        const user = new User(userName, socket)

        chat.join(user)
    }
}

module.exports = App
