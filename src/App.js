import React from "react";
import './App.css';


import Weather from "./Weather"

import Forecast from "./Forecast";


export default function App(props) {
  return (
    <div className="container">
   <main className="App">
    
     <Weather/>
     
      <Forecast />
      
    </main>
    
    </div>
    
   

  );
}