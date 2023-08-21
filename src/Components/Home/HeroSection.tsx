import style from '../../Styles/hero.module.scss';
import linkedIn from '../../../public/Icons/linkedIn.svg';
import discord from '../../../public/Icons/discord.svg';
import github from '../../../public/Icons/github.svg';

function HeroSection() {
  return (
    <section className={style.hero}>
      <header>
        <div className={style.personalImg}></div>
        <p className={style.bio}>
          Hello, I’m Khaled Mohammed, Front-end Developer Based in Cairo.
        </p>
        <aside>
          <span>Follow Me</span>
          <span style={style.space}></span>
          <div className={style.logos}>
            <img src={github} alt='github logo' />
            <img src={linkedIn} alt='linked logo' />
            <img src={discord} alt='discord logo' />
          </div>
        </aside>
      </header>

      <footer></footer>
    </section>
  );
}

export default HeroSection;
