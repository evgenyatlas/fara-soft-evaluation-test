import ValueStore from "../../lib/effector/valueStore";

/**
 * Storage and Users management
 */
class Users extends ValueStore {
    constructor(value) {
        super(value);
    }
    add(user) {
        //add the user to the dictionary
        this.set({ ...this.get(), [user.name]: user });
    }
    remove(user) {
        const users = this.get();
        delete users[user.name];
        this.set({ ...users });
    }
}

export default Users;