import React from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Testimonials from './pages/Testimonials';
import Tools from './pages/Tools';

function App() {
  return (
    <>
      <Navbar />
      <main className=" mt-2 pt-5">
      <Hero />
        <About />
        <Projects />
        <Skills />
        <Tools/>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
