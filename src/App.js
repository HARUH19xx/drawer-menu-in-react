import React from 'react';
import style from './assets/style.module.scss';
import {DrawerMenu} from './components';

const App = () => {
  return (
    <div className={style['section_large']}>
      <DrawerMenu />
      <main>
          <div><p>メイン</p></div>
      </main>
    </div>
  );
}

export default App;