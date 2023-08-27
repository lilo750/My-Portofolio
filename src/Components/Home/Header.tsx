import Navbar from './Navbar';
import menuIcon from '../../../public/Icons/menu.svg';
import style from '../../Styles/Home/header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <span className={style.name}>Khaled Mohammed</span>
      <button className={style.menuBtn}>
        <img src={menuIcon} alt='menu icon (Humbug)' />
      </button>

      {/* <Navbar /> */}
    </header>
  );
}

export default Header;
