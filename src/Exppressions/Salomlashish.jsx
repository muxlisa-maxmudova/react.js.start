const Lists = () => {
    const products = ['apple', "banana", "onions", "salmon", "cheese", "butter"]


    return(
        <div>
            {products.map((product)=> (
                <ul key={Math.random()}>
                    <li>{product}</li>
                </ul>
            ))}
        </div>
    )
    }
    export default Lists