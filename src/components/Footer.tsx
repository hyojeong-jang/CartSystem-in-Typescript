import React from 'react';
import { Link } from 'react-router-dom'

import styles from './css/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>서비스를 선택하세요(여러 개 선택가능)</p>
      <Link className={styles.nextContainer} to='/'>
        <div className={styles.nextButton}>다음</div>
      </Link>
    </div>
  );
}

export default Footer
