const Notification = (props) => {
    return (
        <div>
            {props.copied &&
                <h4 style={{float:"left"}}>Copied to clipboard</h4>

            }
        </div>
    )
}
export default Notification
