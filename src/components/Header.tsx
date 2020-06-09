import React from 'react'
import { Link } from 'react-router-dom'
import styles from './css/Header.module.css'

type HeaderProps= {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  const formattedDatetime = (): string => {
    const today: Date = new Date();
    const y: number = today.getFullYear();
    const m: number = today.getMonth() + 1;
    const d: number = today.getDate();

    const h: number = today.getHours();
    const min: number = today.getMinutes();
    const ampm: string = h >= 12 ? '오후' : '오전';

    return `${y}. ${m}. ${d} ${ampm} ${h % 12 ? h : 12} : ${min < 10 ? '0' + min : min}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.name}>{name}</div>
        <div className={styles.datetime}>{formattedDatetime()}</div>
      </div>
      <div className={styles.button}>
        <Link to='/item' className={styles.itemButton}>
          시술 추가
        </Link>
        <Link to='discount' className={styles.discountButton}>
          할인 추가
        </Link>
      </div>
    </div>
  );
}

export default Header
