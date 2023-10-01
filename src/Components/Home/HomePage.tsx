import style from './home.module.scss';
import HeroSection from './HeroSection';
import Aside from '../shared/Aside';
import Footer from './Footer';
import ParticlesTs from '../../Utilitez/Particles/ParticlesTs';
import Header from '../shared/Header';

function HomePage() {
  return (
    <div className={style.home}>
      <ParticlesTs />
      <Header />
      <HeroSection />
      <Aside />
      <Footer />
    </div>
  );
}

export default HomePage;
