import { createStore } from "effector"
import { toast } from "react-toastify"
import ValueStore from "../../lib/effector/valueStore"
import history from "../../lib/history"
import { showError } from "../../lib/showError"
import { uid } from "../../lib/uid"
import { url2chatId } from "./lib/url2chatId"

/**
 * 
 */
class Chat {
    id = new ValueStore(url2chatId(history.location.pathname))
    logged = new ValueStore(false)
    messages = new ValueStore([])
    users = new ValueStore({})
    connect
    init(connect) {
        this.connect = connect
    }
    /**
     * chat join method
     * @param {string} userName
     */
    async join(userName) {
        try {
            const { messages, users, chatId } = await this.connect.req('join', { userName, chatId: this.id.get() })
            //If the chat is new, then go there
            if (chatId !== this.id) {
                this.id.set(chatId)
                history.push(chatId)
            }
            this.logged.set(true)
        } catch (error) {
            showError(error)
        }
    }

}

export default new Chat()