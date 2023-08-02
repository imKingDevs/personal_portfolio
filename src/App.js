
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Statics from './components/Statics';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Testimonial />
      <Statics />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
