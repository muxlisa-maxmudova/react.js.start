import {useState} from "react"
const Products = () => {
    const [products, setProducts] = useState(['shirt', "ear-phones", "smartwatch"])
    const add = () => {
        setProducts([...products, 'VR'])
    }
    const removeItem = ()=> {
        setProducts(products.filter((product)=>(product !== 'shirt')))
    }
    const update = () =>{
        setProducts(products.map((product)=> product === "smartwatch" ? 'smartTv' : product))
    }
    return(
        <div>
            {products.map((product)=>(
                    <ul key={Math.random()}>
                        <li>{product}</li>
                    </ul>
                ))}
            <button onClick={add}>Add</button>
            <button onClick={removeItem}>Remove</button>
            <button onClick={update}>upDate</button>
        </div>
    )
}
export default Products

