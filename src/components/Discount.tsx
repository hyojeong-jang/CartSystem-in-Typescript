import React from 'react';
import useOptions from '../hooks/useOptions';

import Header from './MenuHeader';
import Footer from './Footer';
import DiscountList from '../components/DiscountList';
import styles from './css/Discount.module.css';

const Discount = () => {
  const { discounts } = useOptions();

  return (
    <div className={styles.container}>
      <Header title='할인' />
      <div className={styles.itemContainer}>
        <div>
          {Object.keys(discounts).map((key, idx) => (
            <DiscountList
              key={idx}
              name={discounts[key].name}
              rate={discounts[key].rate}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Discount