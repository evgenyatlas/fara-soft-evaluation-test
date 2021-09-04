import PropTypes from "prop-types";
import { useState } from "react";
import { timePassed } from "../../../lib/timePassed";
import { useInterval } from '../../../lib/useInterval';


/**
 * TimeUpdate component - time display (with update render)
 * @param {Function} time
 * @param {number} timeout
 */
export function TimeUpdate({ time, timeout = 1000 }) {
    const [timeText, setTimeText] = useState(timePassed(time));

    useInterval(() => {
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
