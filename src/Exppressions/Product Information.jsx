const ProductInformation = () => {
    const product = {
        name:'Logitech Wireless Mouse',
        price:12

    }
    return (
        <div>
            <h3>Product</h3>
            <ol>
                <li>
                    Name: {product.name}
                </li>
                <li>
                    Price: {`$${product.price}`}
                </li>
            </ol>


        </div>
    )
}
export default ProductInformation
