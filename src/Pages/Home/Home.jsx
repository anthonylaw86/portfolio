import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-header">
          <h1>Anthony Law</h1>
          <p className="subtitle">
            Full Stack Developer & Commercial Real Estate Professional
          </p>
        </div>

        <div className="navigation-grid">
          <Link to="/about" className="nav-card">
            <h2>About</h2>
            <p>Learn about my journey and expertise</p>
          </Link>
          <Link to="/real-estate" className="nav-card">
            <h2>Real Estate</h2>
            <p>Commercial property and investment</p>
          </Link>
          <Link to="/development" className="nav-card">
            <h2>Development</h2>
            <p>Tech projects and solutions</p>
          </Link>
          <Link to="/personal" className="nav-card">
            <h2>Fitness</h2>
            <p>
              9+ years of bodybuilding experience, 2 beautiful pups & avid plant
              enthusiast photos.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
