import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"

import 'react-fancybox/lib/fancybox.css'
import Footer from './components/Footer';
import { HeroSlider } from './components/heroSlider/HeroSlider';
import ServiceSection from './components/serviceSection/ServiceSection';
import PortfolioSection from './components/portfolioSection/PortfolioSection';
import GallerySection from './components/gallerySection/GallerySection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <HeroSlider/>

      <ServiceSection/>

      <PortfolioSection/>
      
      <GallerySection/>

      <ContactSection/>

      <Footer/>
    </div>
  );
}

export default App;
