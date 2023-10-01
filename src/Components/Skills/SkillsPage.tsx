import ParticlesTs from '../../Utilitez/Particles/ParticlesTs';
import Header from '../shared/Header';
import styles from './skills.module.scss';
import html from './Assets/Icons/html.svg';
import css from './Assets/Icons/css.svg';
import bootstrap from './Assets/Icons/bootstrap.svg';
import talwind from './Assets/Icons/talwind.svg';
import react from './Assets/Icons/react.svg';
import ts from './Assets/Icons/ts.svg';
import js from './Assets/Icons/js.svg';
import git from './Assets/Icons/git.svg';
import github from './Assets/Icons/github.svg';

export default function Skills() {
  return (
    <div className={styles.skills}>
      <ParticlesTs />
      <Header />
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <h2>Skills & Experience</h2>
          <p>
            The main area of expertise is front end development (client side of
            the web).
          </p>
          <p>
            {' '}
            highly skilled programmer with a strong foundation in computer
            science fundamentals. My expertise spans a wide range of
            technologies, including HTML, CSS, and JavaScript. I specialize in
            developing small to medium-sized web applications with a focus on
            React, where I excel at creating custom features, dynamic
            animations, and interactive layouts
          </p>
          <span className={styles.ctaDesc}>
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
          <div>
            <img src={html} alt='html icon' />
            <span>Html 4&5</span>
          </div>

          <div>
            <img src={css} alt='css icon' />
            <span>Css 2&3</span>
          </div>

          <div>
            <img src={bootstrap} alt='bootstrap icon' />
            <span>bootstrap</span>
          </div>

          <div>
            <img src={talwind} alt='talwind icon' />
            <span>talwind</span>
          </div>

          <div>
            <img src={js} alt='javascript icon' />
            <span>JavaScript</span>
          </div>

          <div>
            <img src={ts} alt='typescript icon' />
            <span>TypeScript</span>
          </div>

          <div>
            <img src={react} alt='react icon' />
            <span>React</span>
          </div>

          <div>
            <img src={git} alt='git icon' />
            <span>Git</span>
          </div>

          <div>
            <img src={github} alt='github icon' />
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
}
