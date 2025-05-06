import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CoursesSection from './components/CoursesSection';

import HeroSection from './components/HeroSection';
import Contact from './pages/Contact';
import Progress from './pages/Progress';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <CoursesSection />
              </>
            }
          />
          <Route path="/courses" element={<CoursesSection />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
