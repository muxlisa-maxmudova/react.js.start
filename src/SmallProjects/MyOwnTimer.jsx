import {useRef, useState} from "react";

const MyOwnTimer = () => {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const timeRef = useRef(null)
    function countDown(){
        if(!timeRef.current){
            timeRef.current = setInterval(()=>{
                setSeconds((prev)=>{
                    if (prev === 0){
                        if(minutes === 0){
                            clearInterval(timeRef.current);
                            timeRef.current = null;
                            return 0;
                        } else{
                            setMinutes( (m) => m-0.5);
                            return 59;
                        }

                    } return prev - 1;
                })

            },1000)
        }

    }
    function resetTimer(){
        clearInterval(timeRef.current);
        timeRef.current = null
        setMinutes(0)
        setSeconds(0)
    }

    return (
        <div>
            <h1>Timer</h1>
            <input
            placeholder={'Minutes'}
            type='number'
            value={minutes}
            onChange={(e)=>setMinutes(parseInt(e.target.value))}/>
            <input
            placeholder={'seconds'}
            type='number'
            value={seconds}
            onChange={(e)=>setSeconds(parseInt(e.target.value))}/>
            <button onClick={countDown}>
                Start
            </button>
            <button onClick={resetTimer}>Reset</button>
            <p>
                Time Left: {minutes}:{seconds < 10 ? "0" : ""}{seconds}
            </p>
        </div>
    )
}
export default MyOwnTimer
