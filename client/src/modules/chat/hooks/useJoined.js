import { useStore } from "effector-react";
import chat from "../chat";

/**
 * @returns {boolean} joined
 */
export function useJoined() {
    return useStore(chat.joined.$store);
}