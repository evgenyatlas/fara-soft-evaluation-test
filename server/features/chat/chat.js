const { forEachObj } = require("../../lib/forEachObj");
const Message = require("../message/message");

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
        //save user to dictionary
        this.#users[user.name] = user;
        //sending initial data to the user
        user.emit('join', { messages: this.#messages, users: this.#users, chatId: this.id });
        //notify other users about a new user
        this.#broadcast(user, 'userJoin', user);
        //subscribing to user events
        this.#subsUserEvents(user)
    }
    #subsUserEvents(user) {
        //i use bind not only for context binding, but also for currying
        user.on('disconnect', this.#leave.bind(this, user));
        user.on('userMessage', this.#message.bind(this, user));
    }

    /*** User action handlers ***/
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
    /**
     * User message
     * @param {User} user 
     * @param {string} message 
     */
    #message(user, { text }) {
        const message = new Message(user, text)
        this.#messages.push(message)
        this.#emitAll('userMessage', message)
    }
    /********/

    //I dont know about native broadcast and rooms :)
    /**
     * emit for all users
     * @param {User} options.except
     * @param {string} options.event
     * @param {any} options.data
     */
    #broadcast(except, event, data) {
        this.#emitAll(event, data, (user) => user !== except)
    }
    /**
     * Emit for all users
     * @param {string} event 
     * @param {any} data 
     * @param {Function} filter 
     */
    #emitAll(event, data, filter = Boolean) {
        forEachObj(
            this.#users,
            (userName, user) => filter(user) && user.emit(event, data)
        )
    }
}

module.exports = Chat