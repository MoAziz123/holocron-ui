import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Footer from './components/footer';
import Pricing from './components/pricing';
import Reviews from './components/reviews';
import Bumper from './components/bumper';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Bumper/>
    <Reviews/>
    <Pricing/>
    <Footer/>
    </>
  );
}

export default App;
