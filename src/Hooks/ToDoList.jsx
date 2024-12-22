import {useState} from "react"
const ToDoList = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents automatic
        if(inputValue.trim()){
            setTodos([...todos, inputValue])
            setInputValue('')
        }
    }
    const handleChange =(e)=>{
        setInputValue(e.target.value)
    }
    return (
        <div>
            <h1>Todo list</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Add a new task"
                />
                <button type="submit">Add todo</button>
            </form>
            <ul>
                {todos.map((todo)=>(
                    <li key={Math.random()}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}
export default ToDoList
