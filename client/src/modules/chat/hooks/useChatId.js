import { useStore } from "effector-react";
import chat from "../chat";

/**
 * @returns {string} chatId
 */
export function useChatId() {
    return useStore(chat.id.$store);
}