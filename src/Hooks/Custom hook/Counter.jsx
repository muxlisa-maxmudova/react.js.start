import {useCounter} from "./useCounter.js";

const Counter = () => {
    const {increment, decrement, reset, count} = useCounter()
    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}
export default Counter
