import React from "react";
import './Home.css';
import logo from "../assets/intros/penn-logo.webp";



const Home = () => {
  return (
      <div className="home-container">
        <video className="background-video" loading='lazy' src="https://github.com/n1xd/pling/raw/81778bb9f119b52d586e17767a9937daf5c58998/src/assets/intros/introvid.mp4" autoPlay loop muted />
        <div className="home-content-container">
          <div className="image-text-container">
            <img loading='lazy' src={logo} alt="Penn Logo" className="centered-image" />
            <h1 className="penngustics-text">Penn Linguistics Society</h1>
          </div>
          <p className="centered-home-text">Welcome to the Penn Linguistics Society (PLING) website! Find out more about our student-run community, browse events, and share in our passion for language sciences.</p>
        </div>
      </div>
  );
};

export default Home;