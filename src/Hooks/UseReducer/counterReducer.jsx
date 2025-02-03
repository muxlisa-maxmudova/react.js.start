// useReducer is an alternative hook to UseState. It is often used to manage:
// 1) Complex State Cases
// 2) Used to manage states that depend on each other
// Condition: Use only when state logic is structured and predictable
const initialState = {count: 0}
function counterReducer(state, action){
    switch (action.type){
        case 'increment':
            return {count:state.count + 1}
        case 'decrement':
            return {count:state.count - 1}
        case 'increaseByAmount':
            return {count:state.count + action.payload} // const action(object) = {type:..., payload:...}
        case 'decreaseByAmount':
            return {count:state.count - action.payload}
    }
}
export {initialState, counterReducer}
