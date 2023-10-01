import linkedIn from '../../../public/Icons/linkedIn.svg';
import discord from '../../../public/Icons/discord.svg';
import github from '../../../public/Icons/github.svg';

import style from './aside.module.scss';

export default function Aside() {
  return (
    <aside>
      <div className={style.word}>
        <span>Follow</span>
        <span className={style.space}>Me</span>
      </div>
      <div className={style.logos}>
        <a href='https://github.com/lilo750'>
          <img src={github} alt='github logo' />
        </a>
        <a href='https://www.linkedin.com/in/khaled-mohammed-6503a9219/'>
          <img src={linkedIn} alt='linked logo' />
        </a>
        <a href='https://discord.com'>
          <img src={discord} alt='discord logo' />
        </a>
      </div>
    </aside>
  );
}
