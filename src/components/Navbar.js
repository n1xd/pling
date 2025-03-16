import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import homeLogo from '../assets/intros/penn-logo.webp';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={homeLogo} alt="Home Logo" />
                </Link>
            </div>
            <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
                <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
                <li><Link to="/events" onClick={() => setMobileMenuOpen(false)}>Events</Link></li>
                {/* <li><Link to="/board" onClick={() => setMobileMenuOpen(false)}>Board</Link></li> */}
                <li><Link to="/workshop" onClick={() => setMobileMenuOpen(false)}>Workshop</Link></li>
                <li><Link to="/ai4good" onClick={() => setMobileMenuOpen(false)}>Ideathon</Link></li>
                <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
            </ul>
            <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
};

export default Navbar;







