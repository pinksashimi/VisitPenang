import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            {/* Video Background Section */}
            <div className="video-background">
                <video autoPlay loop muted playsInline className="background-video">
                    <source src="https://download.shutterstock.com/gatekeeper/W3siZCI6ICJzaHV0dGVyc3RvY2stbWVkaWEiLCAiayI6ICJ2aWRlby8zNDQ2Nzk2MTI1L3ByZXZpZXcubXA0IiwgImUiOiAxNzM2MDM1MzU3LCAibSI6IDF9LCAiWTRLeVRVdVdUQ1dqbExiUmwzSURLcUFlbTZvIl0=/3446796125-preview.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay">
                    <h1 className="main-title">Visit Penang</h1>
                    <p className="main-description">Explore the food, attractions, and accommodations of Penang Island.</p>
                </div>
            </div>

            {/* Navigation Buttons Section */}
            <div className="home-buttons">
                <Link to="/food" className="home-button">
                    Food
                    <p className="button-description">Savor Penang's unique flavors and culinary delights.</p>
                </Link>
                <Link to="/attractions" className="home-button">
                    Attractions
                    <p className="button-description">Discover iconic landmarks and hidden gems.</p>
                </Link>
                <Link to="/hotels" className="home-button">
                    Hotels
                    <p className="button-description">Find the perfect place to stay during your visit.</p>
                </Link>
            </div>

            {/* About Us Section */}
            <div className="about-us">
                <h2>About Us</h2>
                <p>
                    Visit Penang is your one-stop guide to exploring the beautiful island of Penang. From
                    tantalizing food to breathtaking attractions and world-class hotels, we help you make the
                    most of your journey.
                </p>
            </div>
        </div>
    );
}

export default Home;