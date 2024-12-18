const Greeting = () => {
    const greet = () => {
        let time = new Date;
        if (time.getHours() >= 7 && time.getHours() <= 12) {
            return <h1>Good morning!</h1>
        } else if (time.getHours() > 12 && time.getHours() <= 17) {
            return <h1>Good afternoon!</h1>
        } else if (time.getHours() >= 18 && time.getHours() <= 23) {
            return <h1>Good evening!</h1>
        }

    }

    return (
        <div>{greet()}</div>
    )
}
export default Greeting
