import style from '../../Styles/Home/footer.module.scss';
import TypedComponent from '../../Utilitez/TypedAnimation/Typed';
import el from '../../Utilitez/TypedAnimation/Typed';

export default function Footer() {
  return (
    <footer>
      <div className={style.contact}>
        <span>E: Khaled-Muhammed@hotmail.com</span>
        <span>T: +20 (102) 616 30 28</span>
      </div>

      <TypedComponent />
      {/* <p className={style.description} ref={el}></p> */}
    </footer>
  );
}
