const Chat = require('./modules/chat/chat');
const User = require('./modules/user/user');
const { uid } = require('./lib/uid');

class App {
    #io
    //Chat dictionary
    #chats = new Map()
    /**
     * @param {Socket} io 
     */
    constructor(io) {
        this.#io = io;
    }
    init() {
        /*** Socket event handlers ***/
        this.#io.on('connection', async (socket) => {
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
        //If ChatId is not passed or not correct, then we generate
        chatId = chatId && Chat.isId(chatId) ? chatId : uid();
        //If the chat does not exist, then create a new one and write it to the dictionary
        if (!this.#chats.has(chatId))
            this.#chats.set(chatId, new Chat(chatId));

        //get the chat and add the user there
        const chat = this.#chats.get(chatId);
        const user = new User(userName, socket);
        chat.join(user);
    }
}

module.exports = App;