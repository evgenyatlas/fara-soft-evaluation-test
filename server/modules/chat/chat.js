const { forEachObj } = require("../../lib/forEachObj");
const Message = require("../message/message");

class Chat {
    id
    //users dictionary
    #users = new Map()
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
        if (this.#users.has[user.name]) {
            return user.emit('join', {
                error: {
                    code: 422,
                    message: 'Такой пользователь уже есть в чате'
                }
            });
        }
        //save user to dictionary
        this.#users.set(user.name, user);
        //send chat data to user
        user.emit('join', {
            chatId: this.id,
            messages: this.#messages,
            //Map -> Object
            users: Object.fromEntries(this.#users)
        });
        //notify other users about a new user
        this.#broadcast({ except: user, event: 'userJoin', data: user });
        //subscribe to user events
        this.#subsUserEvents(user);
    }
    /**
     * @param {User} user 
     */
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
        this.#users.delete(user.name);
        //clearing subscriptions (socket.io)
        user.remove();
        //notify other users about a new user
        this.#broadcast({ except: user, event: 'userLeave', data: user });
    }
    /**
     * User message
     * @param {User} user 
     * @param {string} message 
     */
    #message(user, { text }) {
        const message = new Message(user, text);
        this.#messages.unshift(message);
        this.#emitAll('userMessage', message);
    }
    /********/
    //I dont know about native broadcast and rooms :)
    /**
     * emit for all users
     * @param {User} options.except
     * @param {string} options.event
     * @param {any} options.data
     */
    #broadcast({ except, event, data }) {
        this.#emitAll(event, data, (user) => user !== except);
    }
    /**
     * Emit for all users
     * @param {string} event 
     * @param {any} data 
     * @param {Function} filter 
     */
    #emitAll(event, data, filter = Boolean) {
        this.#users.forEach((user) => filter(user) && user.emit(event, data));
    }
    /**
     * check if the chat id is correct
     * @param {string} chatId 
     */
    static isId(chatId) {
        return /^.{7}$/.test(chatId);
    }
}

module.exports = Chat;