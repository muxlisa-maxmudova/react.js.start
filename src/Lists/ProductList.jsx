

const ProductList = () => {
    const products = [
        {
            ProductID: 'P1001',
            Name: 'Wireless Bluetooth Headphones',
            Price:59.99,
            Rating: 4.5/5
        },

        {
            ProductID: 'P1002',
            Name: 'Smart Fitness Watch' ,
            Price: 129.99 ,
            Rating: 4.7/5
        },
        {
            ProductID: 'P1003',
            Name: '55-inch 4K LED TV',
            Price: 399.99,
            Rating: 4.6/5
        },
        {
            ProductID: 'P1004',
            Name: 'Stainless Steel Kitchen Knife Set',
            Price: 89.99,
            Rating: 4.4/5
        },

        {
            ProductID: 'P1005',
            Name: 'Electric Coffee Maker',
            Price: 45.99,
            Rating: 4.2/5
        },
    ]
    return (
        <main style={{background: "lightseagreen", margin:'20px'}}>
            {products.map(product => (
                <ol key={product.ProductID}>
                    <li>{product.ProductID}</li>
                    <li>{product.Name}</li>
                    <li>{product.Price}</li>
                    <li>{product.Rating}</li>
                </ol>
            ))}
        </main>
    )
}
export default ProductList
