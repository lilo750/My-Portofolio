import linkedIn from '../../../public/Icons/linkedIn.svg';
import discord from '../../../public/Icons/discord.svg';
import github from '../../../public/Icons/github.svg';

import style from '../../Styles/Home/aside.module.scss';

export default function Aside() {
  return (
    <aside>
      <div className={style.word}>
        <span>Follow</span>
        <span className={style.space}>Me</span>
      </div>
      <div className={style.logos}>
        <a href='https://github.com'>
          <img src={github} alt='github logo' />
        </a>
        <a href='https://linkedin.com'>
          <img src={linkedIn} alt='linked logo' />
        </a>
        <a href='https://discord.com'>
          <img src={discord} alt='discord logo' />
        </a>
      </div>
    </aside>
  );
}
