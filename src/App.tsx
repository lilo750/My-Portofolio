import HomePage from './Components/Home/HomePage';
import Header from './Components/shared/Header';
import HeroSection from './Components/Home/HeroSection';
import Aside from './Components/shared/Aside';
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
