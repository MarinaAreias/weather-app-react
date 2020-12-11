import React, {useState} from "react";
import axios from "axios";
import "./WeatherForecast.css";

import ForecastPreview from "./ForecastPreview";

export default function WeatherForecast(props){
const [loaded, setLoaded]= useState(false);
const [forecast, setForecast] = useState(null);


    function handleForecasteResponse(response){
        setForecast(response.data);
        
        setLoaded(true);
       
    }

    if (loaded && props.city === forecast.city.name){
         console.log();
        return (
              <div className="weatherForecast row">
      <div className="forecastCss">
        <ForecastPreview data={forecast.list[0]}/>
        </div>
        <div className="forecastCss">
        <ForecastPreview data={forecast.list[1]}/>
        </div>
        <div className="forecastCss">
        <ForecastPreview data={forecast.list[2]}/>
        </div>
        <div className="forecastCss">
        <ForecastPreview data={forecast.list[3]}/>
        </div>
        <div className="forecastCss">
       <ForecastPreview data={forecast.list[4]}/>
       </div>
         
        </div>
             
        );;
    } else {

         const apiKey = "0adaa91f644d84f9dd2a3896dae4fdb0";
    let apiUrl= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    

axios.get(apiUrl).then(handleForecasteResponse);


    return (null)
  
    }
    }
    