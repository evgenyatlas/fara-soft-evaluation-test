import { declOfNum } from "./declOfNum";

/**
 * Displays the date in format: 5 минут назад | 1 час назад 
 * @param {number} - time in unixtime format 
 * @returns - time passed
 */
export function timePassed(time) {

    const now = Date.now();
    const diff = now - time;
    if (diff < 1000 * 60 * 1.5) {
        return 'только что';
    } else if (diff > 1000 * 5 && diff < 1000 * 60 * 60) {
        const t = Math.round(diff / 1000 / 60);
        return t + ' ' + declOfNum(t, ['минуту', 'минуты', 'минут']) + ' назад';
    }

    const t = Math.round(diff / 1000 / 60 / 60);
    return t + ' ' + declOfNum(t, ['час', 'часа', 'часов']) + ' назад';
}