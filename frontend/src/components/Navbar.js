import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Visit Penang</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/food">Food</Link>
                </li>
                <li>
                    <Link to="/hotels">Hotels</Link>
                </li>
                <li>
                    <Link to="/attractions">Attractions</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;