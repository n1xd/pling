import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

// Import images
import AboutUsBackground from './assets/intros/about-us-pic.jpg';
// import BoardBackground from './assets/intros/boardpic.webp';
import ContactBackground from './assets/intros/contact-pic.webp';
import EventsBackground from './assets/intros/eventsbg.webp';
import wsbg from './assets/intros/wsbg.webp';
import AiforGood from './pages/AiforGood';

const AboutUs = lazy(() => import('./pages/AboutUs'));
const Events = lazy(() => import('./pages/Events'));
// const Board = lazy(() => import('./pages/Board'));
// const Ideathon = lazy(() => import('./pages/AiforGood'));
const Contact = lazy(() => import('./pages/Contact'));
const Home = lazy(() => import('./pages/Home'));
const Workshop = lazy(() => import('./pages/Workshop'));

const Loading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Delay for 2.5 seconds

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return <>{children}</>;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Extract MainContent into a separate component
const MainContent = () => {
  const location = useLocation();

  // Define the background styles for each route using imported images
  const getBackgroundStyle = (path) => {
    switch (path) {
      case '/about':
        return { backgroundImage: AboutUsBackground};
      case '/events':
        return { backgroundImage: EventsBackground };
      // case '/board':
      //   return { backgroundImage: BoardBackground };
      case '/contact':
        return { backgroundImage: ContactBackground };
      case '/workshop':
        return { backgroundImage: wsbg };
      case '/ai4good':
        return { backgroundImage: wsbg };
      default:
        return { backgroundColor: '#000000' }; // Default for Home
    }
  };

  const backgroundStyle = getBackgroundStyle(location.pathname);

  return (
    <Layout {...backgroundStyle}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          {/* <Route path="/board" element={<Board />} /> */}
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/ai4good" element={<AiforGood />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Scroll to top on route change */}
        <ScrollToTop />

        {/* Error boundary for fallback UI */}
        <ErrorBoundary>
          {/* Render Navbar globally */}
          <Navbar />

          {/* Render the main content with delayed loading */}
          <Loading>
            <MainContent />
          </Loading>
        </ErrorBoundary>
      </div>
    </Router>
  );
};

export default App;













