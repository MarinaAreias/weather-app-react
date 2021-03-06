import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props){
    return (

        <div className="info">

    <h1> {props.data.city} </h1>
  
        <small> 
            <FormattedDate date={props.data.date} /> 
            </small>
      
  
  
  <div className="row" >
         <div className="col-6"> 

         <WeatherTemp celsius={props.data.temperature} />
          
      
        <h3> {props.data.description}</h3>
         <span className="icon"> <WeatherIcon apiCode={props.data.icon}/> 
        </span>
        
        
    </div>
  
         <div className="col-6">
             
             <ul>
        <li> Humidity </li>
        <span className="listValues" > {props.data.humidity}% </span>
         <li> Wind </li>
        <span className="listValues"> {Math.round(props.data.wind)}Km/h </span>
      </ul>

 </div>
         
         </div>
         </div>
    );

}