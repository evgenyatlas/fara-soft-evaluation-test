import { useStore } from "effector-react";
import chat from "../chat";

/**
 * @returns {Array<Message>} messages
 */
export function useMessages() {
    return useStore(chat.messages.$store);
}