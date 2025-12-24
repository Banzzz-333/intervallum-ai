import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/hero'; // Correct capitalization convention: Hero
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Blog from './components/blog'; // Correct capitalization convention: Blog
import Button from './components/Button';
import PainAndPromise from './components/PainAndPromise';
import Differentiators from './components/Differentiators';
import MetricsBlock from './components/MetricsBlock';
import FinalCTA from './components/FinalCTA';
import About from './components/About';
import ContactPage from './components/ContactPage'; // Dedicated Contact Page
import BookingPage from './components/BookingPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* The Navbar and Footer are now rendered within their respective page components (Home, About, Blog, Contact) 
            or within the HomeLayout block. We will remove them from the outer structure here. */}
        <ScrollToTop />
        <Routes>
          {/* HOME PAGE ROUTE: Renders all the marketing content + Navbar/Footer for the one-page scroll experience */}
          <Route path="/" element={
            <>
              {/* Navbar is rendered first */}
              <Navbar /> 
              
              <section id="hero">
                <Hero />
              </section>
              <section>
                <PainAndPromise />
              </section>
              <section>
                <Differentiators />
              </section>
            <section style={{ backgroundColor: 'var(--primary-base)' }}> 
    <MetricsBlock /> 
</section>
              <section id="testimonials">
                <Testimonials />
              </section>
              <section>
                <FinalCTA />
              </section>
   
              {/* Footer is rendered last on the homepage */}
              <Footer />
            </>
          } />

          {/* DEDICATED PAGE ROUTES (These components render their own Navbar/Footer internally) */}
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
         <Route path="/book" element={<BookingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;