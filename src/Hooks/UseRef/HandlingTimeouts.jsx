import {useEffect, useRef, useState} from "react";

const HandlingTimeouts = () => {
    const [message, setMessage ] = useState('Waiting...');
    const TimeRef = useRef(null);
    useEffect(() => {
          TimeRef.current = setTimeout(()=>{
              setMessage('Hello, world');
          }, 3000)
        return () => {
              clearTimeout(TimeRef.current);
        }
    },[])

    return (
        <div>
            {message}
        </div>
    )
}
export default HandlingTimeouts
