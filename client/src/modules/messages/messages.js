import ValueStore from "../../lib/effector/valueStore";

/**
 * Message storage and management
 */
export default class Messages extends ValueStore {
    constructor(value) {
        super(value);
    }
    add(message) {
        this.set([message, ...this.get()]);
    }
}