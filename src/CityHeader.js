import React from "react";

import "./CityHeader.css";

export default function CityHeader(props) {
  return (
  <div className="row">
    <div className="col-6">
  <h1> {props.name} </h1>
  </div>
  </div>);
}
