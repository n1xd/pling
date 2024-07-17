import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <ErrorBoundary>
          <MainContent />
        </ErrorBoundary>
      </div>
    </Router>
  );
};

const MainContent = () => {
  const location = useLocation();
  const getBackgroundImage = (path) => {
    switch (path) {
      case '/about':
        return 'path/to/about-us-background.webp';
      case '/events':
        return 'path/to/events-background.webp';
      case '/board':
        return 'path/to/board-background.webp';
      case '/contact':
        return 'path/to/contact-background.webp';
      default:
        return 'path/to/home-background.webp';
    }
  };

  useEffect(() => {
    // Force repaint on initial load
    const forceRepaint = () => {
      document.body.style.display = 'none';
      void document.body.offsetHeight; // Trigger reflow
      document.body.style.display = 'block';
    };

    forceRepaint();
  }, []);

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









