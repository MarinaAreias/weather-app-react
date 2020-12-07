import React, {useState} from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from "axios";
import "./WeatherForm.css";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {

    const [weatherData, setWeatherData]=useState({ready: false});
   const [city, setCity]=useState(props.defaultCity);
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            city:response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            description:response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind:response.data.wind.speed,
            humidity:response.data.main.humidity
            
        }) 
    }

    function search(){
const apiKey ="0adaa91f644d84f9dd2a3896dae4fdb0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit (event){
      event.preventDefault();
 search(city);
    }

    function handleCityInput(event){
setCity(event.target.value);

    }
    if (weatherData.ready){
        return (

      <div className= "Weather">  
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search city" className="searchBar" autoFocus="on"  onChange={handleCityInput}/>
        <input type="submit" value="Search" className="searchButton"  />
     
      </form>

    <WeatherInfo data={weatherData} />

    <WeatherForecast city={weatherData.city} />
        
     </div>
  );
} else {

search();

return(
 
    <p>
     
      Loading...
      <Loader
         type="Oval"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs 
         />
  </p>

     );
     
}
    }

    

  