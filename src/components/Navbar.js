import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../assets/intros/penn-logo.png";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isSmallScreen = window.innerWidth <= 768;
            setIsMobile(isTouchDevice && isSmallScreen);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Home" className="logo-image" />
                </Link>
            </div>
            <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''} ${isMobile ? 'mobile' : ''}`}>
                <li><Link to="/about" onClick={handleMobileMenuToggle}>About Us</Link></li>
                <li><Link to="/events" onClick={handleMobileMenuToggle}>Events</Link></li>
                <li><Link to="/board" onClick={handleMobileMenuToggle}>Board</Link></li>
                <li><Link to="/contact" onClick={handleMobileMenuToggle}>Contact Us</Link></li>
            </ul>
            {isMobile && (
                <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;





