import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContactModalProvider } from './context/ContactModalContext';
import './App.css';

const Home = React.lazy(() => import('./pages/Home'));
const APropos = React.lazy(() => import('./pages/A-propros'));
const Cgv = React.lazy(() => import('./pages/Cgv'));
const Estimate = React.lazy(() => import('./pages/Estimate'));

function App() {
  return (
    <ContactModalProvider>
      <Router>
        <Navbar />
        <Suspense fallback={<div className='flex items-center justify-center mt-16'><p className=''>Chargement...</p></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/cgv" element={<Cgv />} />
            <Route path="/estimate" element={<Estimate />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </ContactModalProvider>
  );
}

export default App;
