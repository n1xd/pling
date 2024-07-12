import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src="/penn-logo.png" alt="Home" className="logo-image" />
                </Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/board">Board</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;


