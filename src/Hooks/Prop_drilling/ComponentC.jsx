import {Data} from "../../App.jsx";
import {Data1} from "../../App.jsx";
import {useContext} from "react";
const ComponentC = () => {
    const userName = useContext(Data);
    const userAge = useContext(Data1);
    return (
        <h1>My name is {userName} and i am {userAge}</h1> // easier and compact way to transmit data
            // <Data.Consumer>
            //     {(name)=>{
            //         return (
            //             <Data1.Consumer>
            //                 {
            //                     (age)=>{
            //                     return(
            //                         <h1>Age:{age} && Name:{name} </h1>
            //                           )
            //                     }
            //                 }
            //             </Data1.Consumer>
            //             )
            //         }
            //     }
            // </Data.Consumer>

    )
}
export default ComponentC
