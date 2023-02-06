import React from "react";
import "./Home.css";
import logos from "../../assets/schools.png";
export default function Home() {
  return (
    <div className="home">
      <h1>Welcome To The Home Page! </h1>
      <img src={logos} alt="School logos" />
    </div>
  );
}
