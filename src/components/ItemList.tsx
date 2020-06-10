import React from 'react';
import { Item } from '../types/index';

import styles from './css/ItemList.module.css';

const ItemList = ({ name, price, count }: Item) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <span className={styles.price}>{price}</span>
      <span className={styles.count}>{count}</span>
    </div>
  );
}

export default ItemList
