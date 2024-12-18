const UseStateInSeparateFiles = (props) => {
    return (
        <div>
            {props.number}
            <button onClick={props.setNumber} type="button">
                Go down
            </button>
        </div>
    )
}
export default UseStateInSeparateFiles
