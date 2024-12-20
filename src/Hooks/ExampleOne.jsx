import {useState} from "react";
const ExampleOne = () => {
    const [subjects, setSubjects] = useState(()=>['maths', 'geometry', 'english']);
    const change = () =>{
        setSubjects(()=>[...subjects, 'physics'])
    }

    return (
        <div>
            {subjects.map((subject)=>(
                <ul key={Math.random()}>
                    <li>{subject}</li>
                </ul>
            ))}
            <button onClick={change} >Add one more subject</button>
        </div>
    )
}
export default ExampleOne
