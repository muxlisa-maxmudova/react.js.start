import {useRef, useState} from "react";
export default function Timer1() {
        const [minutes, setMinutes] = useState(0);
        const [seconds, setSeconds] = useState(0);
        const timerRef = useRef(null);

        const startTimer = () => {
            if (!timerRef.current) {
                timerRef.current = setInterval(() => {
                    setSeconds((prev) => {
                        if (prev === 0) {
                            setMinutes((m) => m - 1);
                            return 59;
                        }
                        return prev - 1;
                    });
                }, 1000);
            }
        };

        const resetTimer = () => {
            clearInterval(timerRef.current);
            timerRef.current = null;
            setMinutes(0);
            setSeconds(0);
        };

        return (
            <div>
                <h2>Set Timer</h2>
                <input
                    type="number"
                    placeholder="Minutes"
                    value={minutes}
                    onChange={(e) => setMinutes(parseInt(e.target.value, 10) || 0)}
                />
                <input
                    type="number"
                    placeholder="Seconds"
                    value={seconds}
                    onChange={(e) => setSeconds(parseInt(e.target.value, 10) || 0)}
                />
                <button onClick={startTimer}>Start Timer</button>
                <button onClick={resetTimer}>Reset</button>

                <p>
                    Time Left: {minutes}:{seconds < 10 ? "0" : ""}{seconds}
                </p>
            </div>
        );
    }



//1) Timer
//2) It should count down the given amount of minutes
//3) we should have secs and minutes
//4) we have input, where we enter minutes and seconds
