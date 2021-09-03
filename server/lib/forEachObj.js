/**
 * iterate over object values
 */
module.exports.forEachObj = function forEachObj(obj, fn) {
    return Object.keys(obj).forEach(key => fn(key, obj[key]));
}
