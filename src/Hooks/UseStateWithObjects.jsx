import {useState} from "react";
const UseStateWithObjects = () => {
    const [movies, setMovies] = useState( [
            {id: 43,
                title:'Batman',
                time: 2},
            {id:42,
                title:'Sarah Miller',
                time:1.5},
            {id:41,
                title:'David Robinson',
                time:1.7}

        ])

    const change = () =>{
       setMovies(movies.map((movie)=>(
         movie.id===43? {...movies, time: 1 , name:'Set'} : movie
       )))
    }
    return (
        <div>
            {movies.map((movie)=>(
                <ol key={movie.id}>
                    Movie: {movie.id}
                   <li>name: {movie.title}</li>
                    <li>hours: {movie.time}</li>
                </ol>
            ))}
            <button onClick={change}>change</button>
        </div>
    )
}
export default UseStateWithObjects
