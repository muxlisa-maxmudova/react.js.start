import {useRef} from "react";

const UseRef = () => {
    //const background = useRef(null)

        const background = useRef(null)
        const handleClick = () => {
            document.body.style.backgroundColor = 'black'
            document.body.style.color = "white"; // Change text color to white for contrast
        }

    return (
        <div>
            <button ref={background} onClick={handleClick}>Dark</button>
       </div>
)
}
export default UseRef
