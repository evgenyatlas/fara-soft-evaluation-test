import ValueStore from "../../lib/effector/valueStore"
import history from "../../lib/history"
import { showError } from "../../lib/showError"
import Users from "../users/users"
import { url2chatId } from "./lib/url2chatId"

/**
 * 
 */
class Chat {
    id = new ValueStore(url2chatId(history.location.pathname))
    logged = new ValueStore(false)
    messages = new ValueStore([])
    users = new Users({})
    #connect
    init(connect) {
        this.#connect = connect;
        this.#subsEvents();
    }
    /**
     * chat login method
     * @param {string} userName
     */
    async login(userName) {
        try {
            const { messages, users, chatId } = await this.#connect.req('join', { userName, chatId: this.id.get() });

            //If the chat is new, then go there
            if (chatId !== this.id) {
                this.id.set(chatId);
                history.push(chatId);
            }

            //setting initial data
            this.messages.set(messages);
            this.users.set(users);

            this.logged.set(true);
        } catch (error) {
            showError(error);
        }
    }
    //Subscribing to user events
    #subsEvents = () => {
        this.#connect.on('userJoin', this.#userJoin)
        this.#connect.on('userLeave', this.#userLeave)
    }
    #userJoin = (user) => {
        this.users.add(user)
    }
    #userLeave = (user) => {
        this.users.remove(user)
    }
}

export default new Chat()