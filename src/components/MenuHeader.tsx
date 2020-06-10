import React from 'react'
import { Link } from 'react-router-dom'
import styles from './css/MenuHeader.module.css'

type MenuHeaderProps= {
  title: string;
}

const MenuHeader = ({ title }: MenuHeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <Link to='/' className={styles.itemButton}>
          x
        </Link>
      </div>
      <div className={styles.title}>{title}</div>
      <div>+</div>
    </div>
  );
}

export default MenuHeader
