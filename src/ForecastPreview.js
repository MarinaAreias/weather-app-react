import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function ForecastPreview(props){

    function dayForecast(){
        let date = new Date(props.data.dt * 1000);
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
       let day = days[date.getDay()];
        return `${day}`;
    }

    function forecastTemp(){
        let temp = Math.round(props.data.main.temp);

        return `${temp}°C`;
    }
    return(
        <div className="col-3">
           <h4>
    <strong className="dateForecast"> {dayForecast()} </strong>
          </h4>
          <span className="iconForecast">
               <WeatherIcon apiCode={props.data.weather[0].icon}/>   
          </span>      
           {forecastTemp()}
           
  </div>
    );
}