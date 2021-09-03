class Chat {
    id
    //user dictionary
    #users = new Map()
    //list of messages
    #messages = []
    /**
     * create a chat
     * @param {string} id
     */
    constructor(id) {
        this.id = id
    }
    /**
     * join user to chat
     * @param {User} user 
     */
    join(user) {
        //If the user is already in the chat, then we throw an error and exit
        if (this.#users.has(user.name)) {
            return user.emit('join', {
                error: {
                    code: 422,
                    message: 'Такой пользователь уже есть в чате'
                }
            })
        }
        user.emit('join', { messages: this.#messages, users: this.#users, chatId: this.id })
    }
    //I dont know about broadcast and rooms
    /**
     * emit for all users
     * @param {string} options.event
     * @param {any} options.data
     * @param {filter} options.filter
     */
    emitUsers({ event, data, filter }) {
    }
}

new Chat()

module.exports = Chat