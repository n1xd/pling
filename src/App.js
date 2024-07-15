import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';

const AboutUs = lazy(() => import('./pages/AboutUs'));
const Events = lazy(() => import('./pages/Events'));
const Board = lazy(() => import('./pages/Board'));
const Contact = lazy(() => import('./pages/Contact'));
const Home = lazy(() => import('./pages/Home'));

const Loading = () => (
  <div className="loading-container">
    <p>Loading...</p>
  </div>
);

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
      <Suspense fallback={<Loading />}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/board" element={<Board />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;







