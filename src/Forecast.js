import React  from "react";

import "./Forecast.css";

export default function Forecast() {
 
  return (
    <div className="secondContainer">
      <div className="Forecast1">
        <header>
          {" "}
          <h4>
            <strong>14:00</strong>
          </h4>
        </header>
        <div className="forecastIcon">
          <span role="img" alt="cloud-imoji">
            {" "}
            ⛅{" "}
          </span>
          <div className="forecastTemp">
            <p> 15°C </p>
          </div>
        </div>
      </div>

      <div className="Forecast2">
        <header>
          {" "}
          <h4>
            <strong>14:00</strong>
          </h4>
        </header>
        <div className="forecastIcon">
          <span role="img" alt="cloud-imoji">
            {" "}
            ⛅{" "}
          </span>
          <div className="forecastTemp">
            <p> 15°C </p>
          </div>
        </div>
      </div>

      <div className="Forecast3">
        <header>
          {" "}
          <h4>
            <strong>14:00</strong>
          </h4>
        </header>
        <div className="forecastIcon">
          <p> ⛅</p>
          <div className="forecastTemp">
            <p> 15°C </p>
          </div>
        </div>
      </div>
    </div>
  );
}
