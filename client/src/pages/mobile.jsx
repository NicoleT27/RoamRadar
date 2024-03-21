import React from "react";
import "./css/mobile.css";
import iphone from "../assets/images/iphones.png";

function Plan() {
  return (
    <div className="homePage6">
      <p className="homePage6P1">Utilize on the go with our free travel app</p>;
      <p  className="homePage6P2"> With RoamRadar's mobile travel planner, access
      your trips wherever you go.
    </p>
    <img src={iphone} className="iphones" alt="iphones" />
    </div>
  );
}

export default Plan;


