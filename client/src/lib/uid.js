/**
 * generate id
 * @returns id
 */
export function uid() {
    return (Math.random() * Date.now()).toString(16).substring(2, 9)
}