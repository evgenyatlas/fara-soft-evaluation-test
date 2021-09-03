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
    id = new ValueStore('')
    logged = new ValueStore(false)
    messages = new ValueStore([])
    connect
    constructor() {
        this.#installId()
    }
    init(connect) {
        this.connect = connect
    }
    //it seems bad #1
    #installId = () => {
        //get chat id from url
        let id = url2chatId(history.location.pathname);
        //If the chat is new, then we generate ID and go to url
        if (!id) {
            id = uid();
            history.push(id);
        }
        this.id.set(id);
    }
    async join(userName) {
        try {
            const { messages, users } = await this.connect.req('join', { userName, chatId: this.id.get() })
            this.logged.set(true)
        } catch (error) {
            showError(error)
        }
    }

}

export default new Chat()