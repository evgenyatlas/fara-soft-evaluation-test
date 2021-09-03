/**
 * iterate over object values
 */
export function forEachObj(obj, fn) {
    return Object.keys(obj).forEach(key => fn(key, obj[key]));
}
