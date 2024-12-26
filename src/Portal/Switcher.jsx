import {useState} from "react";
const Switcher = () => {
     const [sw, setSw] = useState(false)

    return (
        <div>
            {
                sw ? <span>Light</span> : <span>Dark</span>
            }
            <button onClick={()=>{setSw(!sw)}}>Switch</button>
        </div>

    )
}
export default Switcher
