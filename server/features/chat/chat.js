const { forEachObj } = require("../../lib/forEachObj")

class Chat {
    id
    //user dictionary
    #users = {}
    //list of messages
    #messages = []
    /**
     * create a chat
     * @param {string} id
     */
    constructor(id) {
        this.id = id;
    }
    /**
     * join user to chat
     * @param {User} user 
     */
    join(user) {
        //If the user is already in the chat, then we throw an error and exit
        if (this.#users[user.name]) {
            return user.emit('join', {
                error: {
                    code: 422,
                    message: 'Такой пользователь уже есть в чате'
                }
            });
        }
        this.#users[user.name] = user;
        //sending data to the user
        user.emit('join', { messages: this.#messages, users: this.#users, chatId: this.id });
        //notify other users about a new user
        this.#broadcast(user, 'userJoin', user);
        //subscribing to user events
        this.#subsUserEvents(user)
    }
    #subsUserEvents(user) {
        //i use bind not only for context binding, but also for currying
        user.on('disconnect', this.#leave.bind(this, user));
    }
    /**
     * User leave
     * @param {User} user 
     */
    #leave(user) {
        delete this.#users[user.name];
        user.remove();
        //notify other users about a new user
        this.#broadcast(user, 'userLeave', user);
    }
    //I dont know about native broadcast and rooms :)
    /**
     * emit for all users
     * @param {string} options.event
     * @param {any} options.data
     * @param {filter} options.filter
     */
    #broadcast(except, event, data) {
        forEachObj(
            this.#users,
            (userName, user) => except !== user && user.emit(event, data)
        );
    }
}

module.exports = Chat