/**
 * Promise over once
 * @param {object} socket 
 * @param {string} event 
 * @returns {Promise} Promise
 */
function take(socket, event) {
    return new Promise((res, rej) => {
        socket.once(event, res);
        socket.once('disconnect', (e) => {
            socket.removeAllListeners();
            rej(new Error('disconnect socket'));
        })
    })
};

module.exports.take = take;