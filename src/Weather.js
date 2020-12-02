import React, {useState} from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from "axios";
import "./Weather.css";
import Loader from "react-loader-spinner";
import FormattedDate from "./FormattedDate";


export default function Weather(props) {

    const [weatherData, setWeatherData]=useState({ready: false});

    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            city:response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            description:response.data.weather[0].description,
            iconUrl:"",
            wind:response.data.wind.speed,
            humidity:response.data.main.humidity
            
        }) 
    }

    if (weatherData.ready){
        return (
      <div className= "Weather">  
      <form>
        <input type="text" placeholder="Search city" className="searchBar" autoFocus="on" />
        <input type="submit" value="Search" className="searchButton" />
      </form>

    
        <h1> {weatherData.city} </h1>
  
        <small> 
            <FormattedDate date={weatherData.date}/> 
            
            </small>
      
  
  
  <div className="row" >
         <div className="col-6"> 
        <h2> {Math.round(weatherData.temperature)}<span className="unit">℃</span></h2>    
      
        <h3> {weatherData.description} ☀</h3>
    </div>
  
         <div className="col-6">
             
             <ul>
        <li> Humidity </li>
        <span> {weatherData.humidity}% </span>
         <li> Wind </li>
        <span> {Math.round(weatherData.wind)}/h </span>
      </ul>

 </div>
         
         </div>


     </div>
    
  );
} else {

const apiKey ="0adaa91f644d84f9dd2a3896dae4fdb0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleResponse);

return(
    <p>Loading...
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

    

  