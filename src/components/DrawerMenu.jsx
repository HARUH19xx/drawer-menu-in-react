import { useState } from 'react';
import style from '../assets/style.module.scss';

const DrawerMenu = () => {
  const [menu, setMenu] = useState('close')
  const toggleMenu = () => {
    switch (menu) {
      case 'open': {
        setMenu('close')
        break;
      }

      default: {
        setMenu('open')
      }
    }
  }
  const body = () => {
    switch (menu) {
      case 'open':
        console.log('open the menu!')
        return(
          <div className={style['menu-list']}>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
        )
    
      default:
        return(
          <div></div>
        )
    }
  }
  return (
    <div className={style['section_large']}>
        <div className={style['menu-icon']} onClick={() => toggleMenu()}>メニュー</div>
        <div className={style['menu']}>{body()}</div>
    </div>
  );
}

export default DrawerMenu