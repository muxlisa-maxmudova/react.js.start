//import Greeting from "./ConditionalRendering/Greeting.jsx";
import {useState} from "react";
import UseStateInSeparateFiles from "./Hooks/UseStateInSeparateFiles.jsx";
import UseStateInSeparateFilesTwo from "./Hooks/UseStateInSeparateFilesTwo.jsx";
export const App = () => {
   const [number, setNumber] = useState(0)
    const [state, setState] = useState(0)


    return (
        <main>
            <UseStateInSeparateFiles number={number} setNumber={()=>setNumber(number-1)}/>
            <UseStateInSeparateFilesTwo number={state} Increase={()=> setState(state+1)}/>
        </main>
    )
}
export default App























