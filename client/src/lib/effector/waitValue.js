/**
 * Promise method to wait for a effector event
 * @param {Event} event 
 * @returns {Promise} Promise
 */
export function waitEvent(event) {
    return new Promise((res, rej) => {
        //subscribe to the event and save the unsubscribe function
        const unsub = event.watch(cb);
        function cb(data) {
            res(data);
            unsub();
        }
    })
}