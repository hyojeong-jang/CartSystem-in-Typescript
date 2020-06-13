import React, { useState, useCallback } from 'react';

import { Discount } from '../types/index';
import useCart from '../hooks/useCart'
import SelectDiscount from '../components/SelectDiscount'
import { totalAmount, discount } from '../utils/helper'

import styles from './css/DiscountCart.module.css';

const DiscountCart = ({ name, rate }: Discount) => {
  const { items } = useCart();

  const [ isOpened, setIsOpened ] = useState(false);
  const onClick = useCallback(() => setIsOpened(!isOpened), [])

  return (
    <>
      <main className={styles.container}>
        <ul className={styles.discountContainer}>
          <div className={styles.text}>
            <span>{name}</span>
            <span className={styles.target}>{}</span>
            <span className={styles.discount}>
              {`${items ? discount(totalAmount(items), rate) : '-0원' } (${Math.round(rate * 100)}%)`}
            </span>
          </div>
          <div
          onClick={onClick}
          className={styles.count}
        >수정</div>
        </ul>
      </main>
    </>
  );
};

export default DiscountCart

