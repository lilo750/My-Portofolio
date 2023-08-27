import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import style from '../../Styles/Home/footer.module.scss';

export default function Footer() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'I am a frontend developer',
        'I love web development',
        'I code cool websites',
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 80,
      backSpeed: 100,
      backDelay: 20,
      smartBackspace: true,
      showCursor: true,
      fadeOut: true,
      loop: true,

      // cursorChar: "!"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <footer>
      <div className={style.contact}>
        <span>E: Khaled-Muhammed@hotmail.com</span>
        <span>T: +20 (102) 616 30 28</span>
      </div>

      <p className={style.description} ref={el}></p>
    </footer>
  );
}
