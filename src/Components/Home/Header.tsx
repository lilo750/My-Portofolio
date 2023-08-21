import Navbar from './Navbar';
import style from '../../Styles/Header/header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <span className={style.name}>Khaled Mohammed</span>
      <Navbar />
    </header>
  );
}

export default Header;
