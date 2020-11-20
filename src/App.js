import React from "react";
import './App.css';


import Search from "./Search";
import CityHeader from "./CityHeader";
import Date from "./Date";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Forecast from "./Forecast";


export default function App(props) {
  return (
    <main className="App">
      <Search />
      <CityHeader name="Rotterdam" />
      <Date />
      <Temperature />
      <WeatherIcon />
      <Humidity value={93} />
      <Wind value={7} />
      <Forecast />
      
    </main>
  );
}