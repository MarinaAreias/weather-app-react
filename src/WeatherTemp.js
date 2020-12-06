import React, { useState } from "react";

export default function WeatherTemp(props){

    const [unit, setUnit] = useState("celsius");
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit(){
       return  (props.celsius * 9/5) + 32;
    } 

    if (unit === "celsius"){
return(
        <span>
        <h2> {Math.round(props.celsius)} 
        <span className="unit"> ℃ | <a href="/" onClick={convertToFahrenheit}> °F  </a> </span>
        </h2>  
        </span>
    );

    } else  {
        
        return ( 
        <span>
        <h2> {Math.round(fahrenheit())} 
        <span className="unit"> <a href="/" onClick={convertToCelsius}>℃  </a> |  °F </span>
        </h2>  
        </span>
        );
        }
    
}