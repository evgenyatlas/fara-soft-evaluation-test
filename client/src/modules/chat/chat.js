import ValueStore from "../../lib/effector/valueStore";
import history from "../../lib/history";
import { showError } from "../../lib/showError";
import Messages from "../messages/messages";
import Users from "../users/users";
import { url2chatId } from "./lib/url2chatId";

/**
 * Manager for the current chat 
 */
//fields use the ValuStore(wrapper around effector) or inherit from it, for update react component
//TODO: Split into multiple modules
class Chat {
    id = new ValueStore(url2chatId(history.location.pathname))
    joined = new ValueStore(false)
    messages = new Messages([])
    users = new Users({})
    userName = new ValueStore('')
    #connector
    /**
     * chat init method
     * @param {Connector} connect 
     */
    init(connector) {
        this.#connector = connector;
    }
    /**
     * Chat start method
     */
    start = () => {
        //Subscribe to events from the server
        this.#subsEvents();
        //If the userName is entered, then we login
        if (this.userName.get())
            this.login();
    }
    /**
     * Stop chat method
     */
    stop = () => {
        this.#unSubsEvents();
    }
    /**
     * Chat login method
     */
    async login() {
        try {
            //Connect to the chat and get the initial data
            const { messages, users, chatId } = await this.#connector.req('join', { userName: this.userName.get(), chatId: this.id.get() });
            //If the chat is new, then go there
            if (chatId !== this.id) {
                this.id.set(chatId);
                history.push(chatId);
            }

            //setting initial data
            this.messages.set(messages);
            this.users.set(users);

            this.joined.set(true);
        } catch (error) {
            showError(error);
        }
    }
    /**
     * send message
     * @param {string} text
     */
    async sendMessage(text) {
        this.#connector.emit('userMessage', { text });
    }
    /**
     * Subscribing to user events (from server)
     */
    #subsEvents = () => {
        this.#connector.on('userJoin', this.#userJoin);
        this.#connector.on('userLeave', this.#userLeave);
        this.#connector.on('userMessage', this.#message);
    }
    #unSubsEvents = () => {
        this.#connector.off('userJoin', this.#userJoin);
        this.#connector.off('userLeave', this.#userLeave);
        this.#connector.off('userMessage', this.#message);
    }
    /**
     * handle joined users
     * @param {User} user 
     */
    #userJoin = (user) => {
        this.users.add(user);
    }
    /**
     * handle leave users
     * @param {User} user 
     */
    #userLeave = (user) => {
        this.users.remove(user);
    }
    /**
     * handle message users
     * @param {Message} message 
     */
    #message = (message) => {
        this.messages.add(message);
    }
}

export default new Chat();