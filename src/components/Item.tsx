import React from 'react';
import useItems from '../hooks/useItems';

import Header from './MenuHeader';
import Footer from './Footer';
import ItemList from '../components/ItemList';
import styles from './css/Item.module.css';

const Item = () => {
  const items = useItems();

  return (
    <div className={styles.container}>
      <Header title='시술 메뉴' />
      <div className={styles.itemContainer}>
        <div>
          {Object.keys(items).map((key, idx) => (
            <ItemList
              key={idx}
              name={items[key].name}
              price={items[key].price}
              count={items[key].count}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Item
