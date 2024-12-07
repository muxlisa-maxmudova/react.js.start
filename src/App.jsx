import Salomlashish from "./Exppressions/Salomlashish.jsx";

function App() {
        const answer = (8+12)*(15-5)
        const sayHello = (a,b)=>{
            return `${a} ${b}`
        }
        const link = "https://chatgpt.com/"
    return (
        <div style={{background: "lightcyan", margin: '20px'}}>
            <p>{`(8+12)*(15-5)=${answer}`}</p>
            <p>{sayHello('Hello', 'Mila')}</p>
            People: {['John, ', 'Jenna, ', 'Anna, ', ' Jack']}
            <br/>
            <br/>
            <a href={link}>Link</a>
            <Salomlashish/>
        </div>
    )
}

export default App






















