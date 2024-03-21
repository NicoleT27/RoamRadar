import React from "react";
import "./css/landing.css";
import Animated from "../assets/images/LandingPageProductAnimation__background.jpg";


function Landing() {
  return (
    <div className="homePage2">
      <p className="page2P">Your itinerary and your map in one view</p>
      <p className="page2P2">
        No more switching between different apps, tabs, and tools to keep track
        of your travel plans.
      </p>
      <img src={Animated}  className="animatedbg" alt="Animated screenshot of app functioning with a map in the background"/>
    </div>
  );
}

export default Landing;

