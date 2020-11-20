import React from "react";

import "./Humidity.css";

export default function Humidity(props) {
  return (
    <div className="Humidity">
      <ul>
        <li> Humidity </li>
        <span> {props.value}% </span>
      </ul>
    </div>
  );
}