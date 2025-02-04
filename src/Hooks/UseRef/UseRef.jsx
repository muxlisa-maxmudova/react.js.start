import {useRef} from "react";

const UseRef = () => {
    //const background = useRef(null)

        const background = useRef(false)
    const color = useRef(false)
        const handleClick = () => {
            if(background.current) {
                document.body.style.backgroundColor = 'black'
                document.body.style.backgroundColor = "white";

                // Change text color to white for contrast
            }else {
                document.body.style.backgroundColor = 'white';
                document.body.style.backgroundColor = "black";
            }
           background.current = !background.current;

        }
        const handleText =() => {
            if(color.current){
                document.h1.style.color = 'black'
                document.h1.style.color = 'white'
            }else {
                document.h1.style.color = 'white'
                document.h1.style.color = 'black'
            }
            color.current = !color.current;
        }

    return (
        <div>
            <h1>Hello</h1>
            <button ref={background} onClick={handleClick}>Dark</button>
            <button ref={color} onClick={handleText}>dark</button>
       </div>
)
}
export default UseRef
