import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="text" placeholder="Search city" className="searchBar" />
        <input type="submit" value="Search" className="searchButton" />
      </form>
    </div>
  );
}
