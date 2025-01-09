import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            {/* Video Background Section */}
            <div className="video-background">
                <video className="background-video" autoPlay loop muted playsInline>
                    <source src={`${process.env.PUBLIC_URL}/background.mp4`} type="video/mp4" />
                </video>
                <div className="overlay">
                    <h1 className="main-title">Penang Uncovered: Flavors, Sights, and Stays</h1>
                    <p className="main-description">
                        Embark on a journey through Penang’s finest! Taste its iconic dishes, marvel at its breathtaking attractions, and unwind in the best hotels. Your adventure starts here.
                    </p>
                </div>
            </div>

            {/* Navigation Buttons Section */}
            <div className="home-buttons">
                <Link to="/food" className="home-button fancy-button">
                    <div className="icon food-icon"></div>
                    <h2>Food</h2>
                    <p>Savor Penang's unique flavors and culinary delights.</p>
                </Link>
                <Link to="/attractions" className="home-button fancy-button">
                    <div className="icon attractions-icon"></div>
                    <h2>Attractions</h2>
                    <p>Discover iconic landmarks and hidden gems.</p>
                </Link>
                <Link to="/hotels" className="home-button fancy-button">
                    <div className="icon hotels-icon"></div>
                    <h2>Hotels</h2>
                    <p>Find the perfect place to stay during your visit.</p>
                </Link>
            </div>

            {/* About Us Section */}
            <div className="about-us">
                <h2>About Us</h2>
                <p>
                    Visit Penang is your one-stop guide to exploring the beautiful island of Penang. From tantalizing food to breathtaking attractions and world-class hotels, we help you make the most of your journey.
                </p>
            </div>

            {/* Contact Us Section */}
            <div className="contact-us">
                <h2>Contact Us</h2>
                <ul className="contact-list">
                    <li><strong>Facebook ⓕ:</strong> <a href="https://facebook.com/VisitPenang" target="_blank" rel="noopener noreferrer">Visit Penang</a></li>
                    <li><strong>Instagram 📱:</strong> <a href="https://instagram.com/VisitPenang" target="_blank" rel="noopener noreferrer">@VisitPenang</a></li>
                    <li><strong>Email 📨:</strong> <a href="mailto:contact@visitpenang.com">contact@visitpenang.com</a></li>
                    <li><strong>Phone ☎️:</strong> +60 123-456-789</li>
                    <li><strong>Address 🗺:</strong> 123 Penang Street, Georgetown, Penang, Malaysia</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;