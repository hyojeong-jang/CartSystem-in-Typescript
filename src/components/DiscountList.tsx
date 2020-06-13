import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Discount } from '../types/index';
import { fetchDiscount, deleteDiscount } from '../modules/cart'


import styles from './css/DiscountList.module.css';

const DiscountList = ({ name, rate }: Discount) => {
  const dispatch = useDispatch();
  const [ isChecked, setIsChecked ] = useState(false);

  const onChange = useCallback(() => {
    setIsChecked(!isChecked)
    if (isChecked) {
      dispatch(deleteDiscount(name));
    } else {
      dispatch(fetchDiscount({ name, rate }));
    }
  }, [isChecked])
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <input className={styles.checkbox}
            type='checkbox'
            checked={isChecked}
            onChange={onChange}
          />
          <div className={styles.text}>
            <span className={styles.name}>{name}</span>
            <span className={styles.rate}>{`${Math.round(rate * 100)}%`}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscountList
