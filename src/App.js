import AboutUs from './components/aboutUs/Index';
import EarlyAccess from './components/EarlyAccess';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import StayProductive from './components/StayProductive';
import Testimonials from './components/testimonials/Index';

function App() {
  return (
    <div className="min-h-[100vh] bg-slate-800">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <StayProductive />
      <Testimonials />
      <EarlyAccess />
      <Footer />
    </div>
  );
}

export default App;
