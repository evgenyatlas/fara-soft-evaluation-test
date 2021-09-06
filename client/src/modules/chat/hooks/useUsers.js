import { useStore } from "effector-react";
import { obj2list } from "../../../lib/obj2list";
import chat from "../chat";

/**
 * @returns {Array<User>} users
 */
export function useUsers() {
    //convert dictionary to list
    return obj2list(useStore(chat.users.$store));
}