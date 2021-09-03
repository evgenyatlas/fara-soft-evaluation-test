class Chat {
    id
    #users = new Map()
    #messages = []
    constructor(id) {
        this.id = id
    }
    addUser(user) {
        if (this.#users.has(user.name)) {
            return user.emit('join', {
                error: {
                    code: 422,
                    message: 'Такой пользователь уже есть в чате'
                }
            })
        }
        this.#users.set(user.name, user)
        console.log(this.#users)
        user.emit('join', { messages: this.#messages, users: this.#users })
    }
    //I dont know about broadcast
    /**
     * method for emit on all users
     * @param {string} options.event
     * @param {any} options.data
     * @param {filter} options.filter
     */
    emitUsers({ event, data, filter }) {
    }
}

module.exports = Chat