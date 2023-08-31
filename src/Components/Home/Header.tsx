import Navbar from './Navbar';
import HamburgIcon from '../../../public/Icons/menu.svg';
import closeMenuIcon from '../../../public/Icons/closeMenu.svg';
import style from '../../Styles/Home/header.module.scss';
import { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const [isBiggerScreen, setIsBiggerScreen] = useState<boolean>(
    window.matchMedia('(min-width: 961px)').matches
  );

  useEffect(() => {
    const handleResize = (event: any) => {
      setIsBiggerScreen(event.matches);
    };

    const mediaQuery = window.matchMedia('(min-width: 961px)');
    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  const menuIcon = isMenuOpened ? closeMenuIcon : HamburgIcon;

  const menuHandler = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <header className={`${style.header} ${isMenuOpened && style.menuOpened}`}>
      <span className={style.name}>Khalid Mohammed</span>
      {
        <button className={`${style.menuBtn}`} onClick={menuHandler}>
          <img src={menuIcon} alt='menu icon (Hamburg)' />
        </button>
      }
      {/* <Navbar /> */}
      {isMenuOpened || isBiggerScreen ? <Navbar /> : null}
    </header>
  );
}

export default Header;
