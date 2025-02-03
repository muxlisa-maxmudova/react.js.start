import {useReducer} from "react";
// state{...} Reducer function => initialState = {...} => [//state, dispatch] in useReducer hook
// reducer is a function has an action parameter - object action = {type:...}
const initialState = {count: 0}
const reducer = (state, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        case 'RESET':
            return {count: state.count = 0};
        default:
            throw new Error('Unknown action type');
    }
}
const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <main>
            <h1>Count:{state.count}</h1>
            <button onClick={()=> dispatch({type: 'INCREMENT'})}>Increase</button>
            <button onClick={()=> dispatch({type: 'DECREMENT'})}>Decrease</button>
            <button onClick={()=>dispatch({type: 'RESET'})}>Reset</button>
        </main>
    )
}
export default App























