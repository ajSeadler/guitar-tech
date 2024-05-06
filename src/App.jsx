import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import TierOne from './components/TierOne';
import Setup from './components/Setup';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <div>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/clean-and-restring' element={<TierOne />} />
          <Route path='/setup' element={<Setup />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;