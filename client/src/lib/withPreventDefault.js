/**
 * Decorator with preventdefault
 * @param {Function} fn 
 * @returns {Function} function
 */
export function withPreventDefault(fn) {
    return (e) => {
        e.preventDefault()
        fn(e)
    }
}