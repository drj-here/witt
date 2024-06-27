import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Route from react-router-dom
import Navbar from './components/Navbar';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';

export default function App() {
  return (
      <div className="h-screen bg-white p-6">
        <BrowserRouter>
          <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faqs" element={<FAQ />} />
                <Route path="/about" element={<AboutUs />} />
              </Routes>
        </BrowserRouter>
      </div>
  );
}
