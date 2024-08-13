import About from "./components/About";
import Brand from "./components/Brands";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import SkillsSection from "./components/SkillsSection";
import Testimonial from "./components/Testimonial";

function App() {
  

  return (
    <>  
        <Navbar />
        <Hero/>
        <Brand/>
        <About/>
        <SkillsSection/>
        <Services/> 
        <Portfolio/>
        <Contact/>
        <Testimonial/>
        <CTA/>
        <Footer/>   
    </>
  )
}

export default App
