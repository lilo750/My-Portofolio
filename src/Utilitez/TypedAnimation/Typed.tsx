import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import style from '../../Styles/Home/footer.module.scss';

function TypedComponent() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'I am a frontend developer',
        'I love web development',
        'I code cool websites',
      ],
      typeSpeed: 40,
      fadeOut: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <div className={style.description} ref={el}></div>;
}

export default TypedComponent;
