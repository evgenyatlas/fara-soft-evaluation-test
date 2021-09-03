import { forEachObj } from "./forEachObj";

/**
 * transforming object to list
 * @param {Object} obj 
 * @param {(key, value) => item} map - changes to each element
 * @returns {Array} list
 */
export function obj2list(obj, map) {
    let list = [];
    forEachObj(
        obj,
        map ?
            (key, value) => list.push(map(value))
            :
            (key, value) => list.push(value)
    )
    return list
}