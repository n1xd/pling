// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Board from './pages/Board';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './components/Layout';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <MainContent />
      </div>
    </Router>
  );
};

const MainContent = () => {
  const location = useLocation();
  const getBackgroundImage = (path) => {
    switch (path) {
      case '/about':
        return 'path/to/about-us-background.jpg';
      case '/events':
        return 'path/to/events-background.jpg';
      case '/board':
        return 'path/to/board-background.jpg';
      case '/contact':
        return 'path/to/contact-background.jpg';
      default:
        return 'path/to/home-background.jpg';
    }
  };

  return (
    <Layout backgroundImage={getBackgroundImage(location.pathname)}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/board" element={<Board />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default App;








