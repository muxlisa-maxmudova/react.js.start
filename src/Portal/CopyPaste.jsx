import {useState} from "react";
import Notification from "./Notification.jsx";
const CopyPaste = () => {
    const [input, setInput] = useState('')
    const [copied, setCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText(input).then(() => {
            setCopied(true)
            setTimeout(()=>{setCopied(false)}, 2000)
        })
    }
    return (
        <div>
           <input
            placeholder={'anything'} onChange={(e)=>{setInput(e.target.value)}}/>
            <button onClick={handleCopy} >Copy</button>
            <Notification copied={copied}/>
        </div>
    )
}
export default CopyPaste
