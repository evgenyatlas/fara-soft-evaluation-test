import ValueStore from "../../lib/effector/valueStore";
import { waitEvent } from "../../lib/effector/waitValue";

/**
 * Class for storing and receiving login
 * I use the effector, because I bind to the react component
 */
class User {
    name = new ValueStore('');
    logged = new ValueStore(false);
    /**
     * user authorization
     * @param {Connect} connect 
     */
    async auth(connect) {
        //gets a name or waits until name is entered
        const name = this.name.get() || await waitEvent(this.name.set);
        await connect.req('login', name);
        this.logged.set(true);
    }
}

export default new User();