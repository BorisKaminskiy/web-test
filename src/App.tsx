import React from 'react';
import { PageIndex } from "./pages/index";
import classNames from 'classnames';
import styles from './App.module.scss'

function App() {
  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.app)}>
        <PageIndex />
      </div>
      <div className={classNames(styles.mobile)}>
        'ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ'
      </div>
    </div>
  );
}

export default App;
