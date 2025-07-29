import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 300 });
  }, []);

  return (
    <div className="relative">
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;