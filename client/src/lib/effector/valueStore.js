import { createEvent, createStore } from "effector";
import { setPayload } from "./setPayload";

/**
 * Creating a effector store for inputting a value
 * Motivation - relationship between react and app logic
 */
export default class ValueStore {
    $store
    /**
     * create a ValueStore
     * @param {any} value 
     */
    constructor(value) {
        this.$store = createStore(value);
        this.set = createEvent();
        this.$store.on(this.set, setPayload);
    }
    get() {
        return this.$store.getState();
    }
    set() { }
}