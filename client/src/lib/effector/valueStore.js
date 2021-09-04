import { createEvent, createStore } from "effector";
import { setPayload } from "./setPayload";

/**
 * Creating a effector store for inputting a value
 */
export default class ValueStore {
    $store
    constructor(value) {
        this.$store = createStore(value);
        //event for
        this.set = createEvent();
        this.$store.on(this.set, setPayload);
    }
    get() {
        return this.$store.getState();
    }
    set() { }
}