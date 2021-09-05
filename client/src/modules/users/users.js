import ValueStore from "../../lib/effector/valueStore";

/**
 * Users storage and management
 */
class Users extends ValueStore {
    constructor(value) {
        super(value);
    }
    /**
     * Add User
     * @param {User} user 
     */
    add(user) {
        //add the user to the dictionary
        this.set({ ...this.get(), [user.name]: user });
    }
    /**
     * Remove User 
     * @param {User} user 
     */
    remove(user) {
        const users = this.get();
        delete users[user.name];
        this.set({ ...users });
    }
}

export default Users;