import {counterReducer, initialState} from "./counterReducer.jsx";
    import {useReducer, useState} from "react";

    const Counter = () => {
        const [state, dispatch] = useReducer(counterReducer, initialState)
        const [inputValue, setInputValue] = useState(0);
        const handleIncrease = () => dispatch({type: 'increment' });
        const handleDecrease = () => dispatch({type: 'decrement' });
        const decreaseByAmount = () => {
        dispatch({type: "decrementByAmount", payload: Number(inputValue) });
        setInputValue(0)
    };
    const increaseByAmount = () => {
        dispatch({type: "incrementByAmount", payload: Number(inputValue)});
        setInputValue(0)
    };
    return (
        <div>
           <h1>Counter:</h1>
            <p>{state.count}</p>

                <button onClick={handleIncrease}>Increase</button>
                <button onClick={handleDecrease}>Decrease</button>
                <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={increaseByAmount}>ADD</button>
                <button onClick={decreaseByAmount}>Subtract</button>

        </div>
    )
}
export default Counter
