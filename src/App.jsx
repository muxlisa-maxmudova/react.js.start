import {useFetch} from "./Hooks/Custom hook/useFetch.js";

const App = () => {
    const {data,loading, error} = useFetch("https://jsonplaceholder.typicode.com/users")
    if(loading) return <div>Loading...</div>
    if(error) return <p>Error : {error.message}</p>
    return (
        <main>
            {data.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </main>
    )
}
export default App























