import React from "react";
import './App.css';


import WeatherForm from "./WeatherForm";




export default function App(props) {
  return (
    <div className="container">
   <main className="App">
    
     <WeatherForm defaultCity="Rotterdam"/>
      
    </main>
    
    </div>
    
  );
}