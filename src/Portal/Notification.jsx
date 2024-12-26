import {createPortal} from "react-dom";

const Notification = (props) => {
    return createPortal(
        <div>
            {props.copied &&
                <h4 style={{float:"left"}}>Copied to clipboard</h4>

            }
        </div>,
            document.querySelector('#note-content')
    )
}
export default Notification
