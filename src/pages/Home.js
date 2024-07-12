import React from "react";
import './Home.css';
import logo from "../assets/intros/penn-logo.png";



const Home = () => {
  return (
      <div className="home-container">
        <video className="background-video" src="https://github.com/n1xd/pling/raw/81778bb9f119b52d586e17767a9937daf5c58998/src/assets/intros/introvid.mp4" autoPlay loop muted />
        <div className="home-content-container">
          <div className="image-text-container">
            <img src={logo} alt="Penn Logo" className="centered-image" />
            <h1 className="penngustics-text">Penn Linguistics Society</h1>
          </div>
          <p className="centered-home-text">Welcome to Penn Linguistics Society (PLING) website! Find out more about us, browse events, and get involved in our community.</p>
        </div>
      </div>
  );
};

export default Home;