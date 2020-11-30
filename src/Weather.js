import React from "react";

import "./Weather.css";


export default function Weather() {
  return (
      <div className= "Weather">  
      <form>
        <input type="text" placeholder="Search city" className="searchBar" autoFocus="on" />
        <input type="submit" value="Search" className="searchButton" />
      </form>

    
  <h1> Rotterdam </h1>
  <ul>
      <li>friday, 18 Sept 2020</li>
      
  </ul>
  
  <div className="row" >
         <div className="col-6"> 
      <strong>13℃</strong>    
      
      <small> Sunny ☀</small>
    </div>
  
         <div className="col-6">
             
             <ul>
        <li> Humidity </li>
        <span> 98% </span>
         <li> Wind </li>
        <span> 40km/h </span>
      </ul>

 </div>
         
         </div>
     </div>
      


    
    
  );
}
