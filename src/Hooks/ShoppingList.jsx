import {useState} from 'react';
const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        //if(!name || !quantity) return;
        const newItem = {
            name:name,
            quantity: parseInt(quantity),
        };
        setItems((prevItems)=> [...prevItems, newItem]);
        setName('');
        setQuantity('');
    }

    return (
        <div>
            <h1>Shopping List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={'Enter product name'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder={'Enter quantity'}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button type="submit">Add item</button>
            </form>
            <ul>
                {items.map((item) => (
                    <li key={Math.random()}>
                        {item.name} - quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ShoppingList
