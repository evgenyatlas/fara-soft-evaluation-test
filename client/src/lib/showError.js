import { toast } from "react-toastify";

export function showError(error, timeout) {
    toast.error(error.message, {
        position: "bottom-right",
        autoClose: timeout || false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}