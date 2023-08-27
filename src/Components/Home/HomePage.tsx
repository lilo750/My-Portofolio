import style from '../../Styles/Home/home.module.scss';

interface propsInterface {
  children: React.ReactNode;
}

function HomePage({ children }: propsInterface) {
  return <div className={style.home}>{children}</div>;
}

export default HomePage;
