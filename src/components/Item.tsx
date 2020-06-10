import React from 'react';
import useItems from '../hooks/useItems';

import Header from './MenuHeader'
import ItemList from '../components/ItemList';
import styles from './css/Item.module.css';

const Item = () => {
  const items = useItems();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title='시술 메뉴' />
      </div>
      {Object.keys(items).map((key, idx) => (
        <ItemList
          key={idx}
          name={items[key].name}
          price={items[key].price}
          count={items[key].count}
        />
      ))}
    </div>
  );
}

export default Item
