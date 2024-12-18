const UseStateInSeparateFiles = (props) => {
    return (
        <div>
            {props.number}
            <button onClick={props.setNumber}>
                Go down
            </button>
        </div>
    )
}
export default UseStateInSeparateFiles
