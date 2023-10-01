import style from './hero.module.scss';

function HeroSection() {
  return (
    <section className={style.hero}>
      <p className={style.bio}>
        Hello, I’m <span className={style.name}> Khaled Mohammed 👋</span>{' '}
        <br /> A Front-end Developer Based in Cairo.
      </p>
    </section>
  );
}

export default HeroSection;
