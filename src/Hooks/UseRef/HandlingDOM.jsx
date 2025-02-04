import {useRef} from "react";
const HandlingDOM = () => {
    const focusRef = useRef(null)
    const focus = () => {
        focusRef.current.focus()
    }

    return (
        <div>
            <input ref={focusRef}
            type={'password'}
            />
            <button onClick={focus}>Submit</button>
        </div>
    )
}
export default HandlingDOM
