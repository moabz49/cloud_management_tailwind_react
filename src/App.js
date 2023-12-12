import React from 'react'
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Platforms from './components/Platforms';
import Pricing from './components/Pricing';
import Support from './components/Support';


const App = () => {
  return (
    <>
        <Navbar />
        <Hero/>
        <About />
        <Support />
        <Platforms />
        <Pricing />
        <Footer />
    </>
  )
}

export default App