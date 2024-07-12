import React from "react";
import myvid from '../assets/intros/introvid.mp4';
import './Home.css';



const Home = () => {
  return (
      <div className="home-container">
        <video className="background-video" src={myvid} autoPlay loop muted />
        <div className="home-content-container">
          <div className="image-text-container">
            <img src="/penn-logo.png" alt="Penn Logo" className="centered-image" />
            <h1 className="penngustics-text">Penn Linguistics Society</h1>
          </div>
          <p className="centered-home-text">Welcome to Penn Linguistics Society (PLING) website! Find out more about us, browse events, and get involved in our community.</p>
        </div>
      </div>
  );
};

export default Home;