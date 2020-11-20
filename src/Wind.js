import React from "react";

import "./Wind.css";

export default function Wind(props) {
  return (
    <div className="Wind">
      <ul>
        <li> Wind </li>
        <span> {props.value}km/h </span>
      </ul>
    </div>
  );
}