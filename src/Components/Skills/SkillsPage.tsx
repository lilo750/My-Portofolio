import ParticlesTs from '../../Utilitez/Particles/ParticlesTs';
import Aside from '../shared/Aside';
import Header from '../shared/Header';
import styles from './skills.module.scss';

export default function Skills() {
  return (
    <div className={styles.skills}>
      <ParticlesTs />
      <Header />
      <Aside />
      <div className={styles.textWrapper}>
        <h2>Skills & Experience</h2>
        <p className='short-desc'>
          The main area of expertise is front end development (client side of
          the web).
        </p>
        <p className='long-desc'>
          {' '}
          highly skilled programmer with a strong foundation in computer science
          fundamentals. My expertise spans a wide range of technologies,
          including HTML, CSS, and JavaScript. I specialize in developing small
          to medium-sized web applications with a focus on React, where I excel
          at creating custom features, dynamic animations, and interactive
          layouts
        </p>
        <span className='cta-desc'>
          Visit my
          <a
            href='https://www.linkedin.com/in/khaled-mohammed-6503a9219/'
            target='_blank'
          >
            LinkedIn
          </a>{' '}
          for more details.
        </span>
      </div>

      <div className={styles.skillSet}>
        <div className='skill'>
          <img src='./Assets/Icons/html.svg' alt='html icon' />
          <span>Html 4 & 5</span>
        </div>

        <div className='skill'>
          <img src='./Assets/Icons/css.svg' alt='css icon' />
          <span>Css 2 & 3</span>
        </div>

        <div className='skill'>
          <img src='./Assets/Icons/bootstrap.svg' alt='bootstrap icon' />
          <span>bootstrap</span>
        </div>

        <div className='skill'>
          <img src='./Assets/Icons/talwind.svg' alt='talwind icon' />
          <span>talwind</span>
        </div>

        <div className='skill'>
          <img src='./Assets/Icons/js.svg' alt='javascript icon' />
          <span>JavaScript</span>
        </div>

        <div className='skill'>
          <img src='./Assets/Icons/ts.svg' alt='typescript icon' />
          <span>TypeScript</span>
        </div>

        <div className='skill'>
          <img src='./Assets/Icons/react.svg' alt='react icon' />
          <span>React</span>
        </div>

        <div className='skill'>
          <img src='./Assets/Icons/git.svg' alt='git icon' />
          <span>Git</span>
        </div>

        <div className='skill'>
          <img src='../../../public/Icons/github.svg' alt='github icon' />
          <span>GitHub</span>
        </div>
      </div>
    </div>
  );
}
