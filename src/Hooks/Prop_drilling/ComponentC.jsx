import {Data} from "../../App.jsx";
import {Data1} from "../../App.jsx";
const ComponentC = () => {
    return (

            <Data.Consumer>
                {(name)=>{
                    return (
                        <Data1.Consumer>
                            {
                                (age)=>{
                                return(
                                    <h1>Age:{age} && Name:{name} </h1>
                                      )
                                }
                            }
                        </Data1.Consumer>
                        )
                    }
                }
            </Data.Consumer>

    )
}
export default ComponentC
