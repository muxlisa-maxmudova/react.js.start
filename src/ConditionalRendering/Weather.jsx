const Weather = () => {
    const showWeather = () => {
        let temperature = 14;
        if (temperature < 15){
            return   <h1>Weather is cold</h1>
        } else if (temperature > 15 && temperature <=27){
            return  <h1>weather is amazing</h1>
        } else if (temperature > 27) {
            return <h1>Weather is hot</h1>
        }
    }

    return (
        <div>{showWeather()}</div>
    )
}
export default Weather
