import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children, backgroundColor, backgroundImage }) => {
  const location = useLocation(); // Access the current location

  useEffect(() => {
    const contentContainer = document.querySelector('.content-container');
    if (contentContainer) {
      contentContainer.classList.remove('fade-in');
      void contentContainer.offsetWidth; // Trigger reflow to restart the animation
      contentContainer.classList.add('fade-in');
    }
  }, [location]);

  return (
    <div className="layout">
      {/* Fixed background */}
      <div
        className="fixed-background"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundColor: backgroundImage ? 'transparent' : backgroundColor || 'transparent',
        }}
      ></div>

      {/* Content and overlay */}
      <div className="overlay"></div>
      <div className="content-container">{children}</div>
    </div>
  );
};

export default Layout;
















