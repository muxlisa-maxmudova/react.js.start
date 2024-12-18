const UseStateInSeparateFilesTwo = (props) => {
    return (
        <div>
            {props.number}
            <button onClick={props.Increase} type={"button"}>Go up</button>
        </div>
    )
}
export default UseStateInSeparateFilesTwo
