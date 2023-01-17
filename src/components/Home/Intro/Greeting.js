import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
const greetings = [
    "hi there!",
    "uko fiti?",
    "idhi nade",
    "bonjour",
    "ũhana atĩa.",
    "chamgei.",
    "oriena.",
    "hoi.",
    "plus any other greeting i've left out...😉"
];

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay) {
            const id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }
        return () => {}; // pass linter
    }, [delay]);
};

const Greeting = ({ loopMessage }) => {
    const hold = 100; // ticks to wait after greeting is complete before rendering next
    const delay = 50; // tick length in

    const [idx, updateIter] = useState(0); //points to current greeting
    const [greeting, updateMessage] = useState(greetings[idx]);
    const [char, updateChar] = useState(0); // points to current char
    const [isActive, setIsActive] = useState(true); // disable when all greetings are printed

    useInterval(
        () => {
            let newIdx = idx;
            let newChar = char;

            if (char - hold >= greetings[idx].length) {
                newIdx += 1;
                newChar = 0;
            }
            if (newIdx === greetings.length) {
                if (loopMessage) {
                    updateIter(0);
                    updateChar(0);
                } else {
                    setIsActive(false);
                }
            } else {
                updateMessage(greetings[newIdx].slice(0, newChar));
                updateIter(newIdx);
                updateChar(newChar + 1);
            }
        },
        isActive ? delay : null
    );

    return (
        <span
            style={{
                display: "block",
                padding:0,

            }}
        >
            {greeting}
        </span>
    );
};

Greeting.defaultProps = {
    loopMessage: true,
};

Greeting.propTypes = {
    loopMessage: PropTypes.bool,
};

export default Greeting;
