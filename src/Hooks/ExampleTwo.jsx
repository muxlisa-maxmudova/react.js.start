import {useState} from 'react'
const ExampleTwo = () => {
    const [number, setNumber] = useState(()=>{
        Math.floor(Math.random() * 100)
    })
    const generateRandomNumber = () => {
        setNumber(()=>Math.floor(Math.random() * 100));
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={generateRandomNumber}>Generate</button>
        </div>
    )
}
export default ExampleTwo
