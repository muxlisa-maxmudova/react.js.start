import {useContext} from "react";
import {Data, Data1} from "../../App.jsx";

const ComponentC = () => {
    const userName = useContext(Data)
    const userAge = useContext(Data1)
    return (
        <div>
            i am {userName} and i am {userAge} old
        </div>
    )
}
export default ComponentC
