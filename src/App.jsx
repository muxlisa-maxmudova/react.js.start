import ComponentA from "./Hooks/Prop_drilling/ComponentA.jsx";
import {createContext} from "react";

export const Data = createContext();
export const Data1 = createContext();
const App = () => {
    const name = 'Mukhlisa';
    const age = 14;
    return (
        <main>
            <Data.Provider value={name}>
                <Data1.Provider value={age}>
                    <ComponentA/>
                </Data1.Provider>
            </Data.Provider>
        </main>
    )
}
export default App























