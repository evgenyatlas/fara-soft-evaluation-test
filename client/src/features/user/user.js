import { createEvent, createStore } from "effector";
import ValueStore from "../../lib/effector/valueStore";
import { setPayload } from "../../lib/effector/setPayload";
import { waitEvent } from "../../lib/effector/waitValue";

/**
 * Class for storing and receiving login
 * I use the effector, because I bind to the react component
 */
class User {
    name = new ValueStore('');
}

export default new User();