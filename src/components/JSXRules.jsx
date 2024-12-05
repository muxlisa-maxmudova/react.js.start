const JsxRules = () => {
    return (
        <div>
            <h1>JSX Rules</h1>
            <ol>
                <li style={{background:"lightgoldenrodyellow", marginBottom:'5px'}}>
                    Elements must be closed properly
                </li>
                <li style={{background:"lawngreen",  marginBottom:'5px'}}>
                    HTML attributes use camelCase
                </li>
                <li style={{background:"palevioletred" , marginBottom:'5px'}}>
                    JSX elements must be wrapped in a single parent element
                </li>
            </ol>
        </div>
    )
}
export default JsxRules
