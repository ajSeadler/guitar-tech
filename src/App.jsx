import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import TierOne from './components/TierOne';
import Setup from './components/Setup';
import Fretwork from './components/Fretwork';
import Services from './components/Services';
import Pedalboard from './components/Pedalboard';


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
          <Route path='/services' element={<Services />} />
          <Route path='/clean-and-restring' element={<TierOne />} />
          <Route path='/setup' element={<Setup />} />
          <Route path='/fret-work' element={<Fretwork />} />
          <Route path='/pedalboard' element={<Pedalboard />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
