//import Greeting from "./ConditionalRendering/Greeting.jsx";
import {useState} from "react";
import UseStateInSeparateFiles from "./Hooks/UseStateInSeparateFiles.jsx";
export const App = () => {
   const [number, setNumber] = useState(0)


    return (
        <main>
           <UseStateInSeparateFiles number={number} setNumber={()=>setNumber(number-1)}/>
        </main>
    )
}
export default App























