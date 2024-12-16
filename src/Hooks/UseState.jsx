import {useState} from "react";

const Samsung = () => {
    const [state, setState] = useState(0)
    const [count, setCount] = useState(0)
    const Increase = () => {
        setState(state+1)
    }
    const Decrease = () => {
        setCount(count-1)
    }
    return(
        <div>
            <button onClick={Increase}>+{state}</button>
            <button onClick={Decrease}>-{count}</button>
        </div>
    )

}
export default Samsung
