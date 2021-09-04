import PropTypes from "prop-types";
import { useState } from "react";
import { timePassed } from "../../../lib/timePassed";
import { useTimeout } from '../../../lib/useTimeout';

/**
 * TimeUpdate component - time display (with update render)
 * @param {Function} time
 * @param {number} timeout
 */
export function TimeUpdate({ time, timeout = 1000 }) {
    const [timeText, setTimeText] = useState(timePassed(time));

    useTimeout(() => {
        const newTimeText = timePassed(time);
        if (timeText !== newTimeText) {
            setTimeText(newTimeText);
        }
    }, timeout);

    return (
        <>
            {timeText}
        </>
    );
};

TimeUpdate.propTypes = {
    time: PropTypes.number.isRequired,
    timeOut: PropTypes.number
};
