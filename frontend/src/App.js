import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Food from "./components/Food";
import Attractions from "./components/Attractions";
import Hotels from "./components/Hotels";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <nav className="top-bar">
                    <h1>
                        <Link to="/" className="logo">
                            <img
                                src={`${process.env.PUBLIC_URL}/logo.png`}
                                alt="Visit Penang Logo"
                                className="logo-image"
                            />
                        </Link>
                    </h1>
                    <div className="nav-links">
                        <Link to="/food">Food</Link>
                        <Link to="/attractions">Attractions</Link>
                        <Link to="/hotels">Hotels</Link>
                    </div>
                </nav>
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/food" element={<Food />} />
                        <Route path="/attractions" element={<Attractions />} />
                        <Route path="/hotels" element={<Hotels />} />
                    </Routes>
                </div>
                <footer className="footer">
                    <p>© 2025 Visit Penang. All Rights Reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;