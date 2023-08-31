import HomePage from './Components/Home/HomePage';
import Header from './Components/Home/Header';
import HeroSection from './Components/Home/HeroSection';
import Aside from './Components/Home/Aside';
import Footer from './Components/Home/Footer';
import ParticlesTs from './Utilitez/Particles/ParticlesTs';

function App() {
  return (
    <HomePage>
      <ParticlesTs />
      <Header />
      <HeroSection />
      <Aside />
      <Footer />
    </HomePage>
  );
}

export default App;
