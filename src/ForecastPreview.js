import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function ForecastPreview(props){

    function hours(){
        let date = new Date(props.data.dt * 1000);
       let hours = date.getHours();
        return `${hours}:00`;
       
    }

    function forecastTemp(){
        let temp = Math.round(props.data.main.temp);

        return `${temp}°C`;
    }
    return(
        <div className="col-3">
           <h4>
    <strong className="dateForecast"> {hours()} </strong>
          </h4>
          <span className="iconForecast">
               <WeatherIcon apiCode={props.data.weather[0].icon}/>   
          </span>      
           {forecastTemp()}
           
  </div>
    );
}