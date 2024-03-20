import React from "react";
import "./css/home.css";

function Home() {
  return (
    <div>
      <div className="bg"></div>
      <img
        src="./images/Roam-Radar-logo2.png"
        className="logo"
        alt="travel logo"
      />
      <nav>
        <a className="navbar-log" href="">
          Log in
        </a>
        <a className="navbar-sign" href="">
          Sign up
        </a>
      </nav>
      <div className="container">
        <h1>Unlock Effortless Travel Planning</h1>
        <p>
          Discover the ultimate travel companion in our trip planner. Build,
          manage, and chart your dream itineraries effortlessly with our
          advanced AI-powered travel app.
        </p>
      </div>
      <a id="start-btn" href="location.html" className="btn">
        Start Planning
      </a>
    </div>
  );
}

export default Home;

