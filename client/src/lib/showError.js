import { toast } from "react-toastify";

/**
 * Show error
 * @param {Error} error 
 * @param {(number|undefined)} closeTimeout 
 */
export function showError(error, closeTimeout) {
    toast.error(error.message, {
        position: "bottom-right",
        autoClose: closeTimeout || false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}