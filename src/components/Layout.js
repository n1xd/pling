import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import './Layout.css';

const Layout = ({ children, backgroundImage }) => {
  const location = useLocation();
 
  useEffect(() => {
    const contentContainer = document.querySelector('.content-container');
    if (contentContainer) {
      contentContainer.classList.remove('fade-in');
      void contentContainer.offsetWidth; // Trigger reflow to restart the animation
      contentContainer.classList.add('fade-in');
    }
  }, [location]);

  const isHomePage = location.pathname === '/';

  return (
    <div className="layout" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay"></div>
      <div className="navbar-gradient">
        <Navbar />
        <div className="navbar-line"></div>
      </div>
      <div className={`content-container ${!isHomePage && 'bottom-padding'}`}>
        {children}
      </div>
      {!isHomePage && <div className="bottom-gradient"></div>}
    </div>
  );
};

export default Layout;






