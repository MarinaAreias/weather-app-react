import React from "react";

import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props){
    return (

        <div className="info">

    <h1> {props.data.city} </h1>
  
        <small> 
            <FormattedDate date={props.data.date} /> 
            </small>
      
  
  
  <div className="row" >
         <div className="col-6"> 
        <h2> {Math.round(props.data.temperature)} 
        <span className="unit">℃</span>
        </h2>    
      
        <h3> {props.data.description} ☀</h3>
    </div>
  
         <div className="col-6">
             
             <ul>
        <li> Humidity </li>
        <span> {props.data.humidity}% </span>
         <li> Wind </li>
        <span> {Math.round(props.data.wind)}Km/h </span>
      </ul>

 </div>
         
         </div>
         </div>
    );

}