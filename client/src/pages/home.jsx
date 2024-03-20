import React from "react";
import "./css/home.css";
import logo from "../assets/images/Roam-Radar-logo2.png";


function Home() {
  return (
    <div>
      <div className="bg"></div>
      <img src={logo} className="logo" alt="travel logo" />
      <nav>
        <a className="navbar-log" href="">
          Log in
        </a>
        <a className="navbar-sign" href="">
          Sign up
        </a>
      </nav>
      <div className="container">
        <header>
          <h1>Unlock Effortless Travel Planning</h1>
        </header>
        <p>
          Discover the ultimate travel companion in our trip planner. Build,
          manage, and chart your dream itineraries effortlessly with our
          advanced AI-powered travel app.
        </p>
        {/* </div> */}
        <a id="start-btn" href="location.html" className="btn">
          Start Planning
        </a>
        <a id="app-btn" href="#" className="app-btn">
          Get the App
        </a>
      </div>
    </div>
  );
}

export default Home;

