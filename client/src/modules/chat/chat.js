import ValueStore from "../../lib/effector/valueStore";
import history from "../../lib/history";
import { showError } from "../../lib/showError";
import Users from "../users/users";
import { url2chatId } from "./lib/url2chatId";

/**
 * manager for the current chat 
 */
//fields use the ValuStore(wrapper over effector) or inherit from it, for react component
class Chat {
    id = new ValueStore(url2chatId(history.location.pathname))
    joined = new ValueStore(false)
    messages = new ValueStore([])
    users = new Users({})
    #connect
    /**
     * 
     * @param {Connect} connect 
     */
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
            //Connect to the chat and get the initial data
            const { messages, users, chatId } = await this.#connect.req('join', { userName, chatId: this.id.get() });

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
     * Subscribing to user events
     */
    #subsEvents = () => {
        this.#connect.on('userJoin', this.#userJoin);
        this.#connect.on('userLeave', this.#userLeave);
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
}

export default new Chat();