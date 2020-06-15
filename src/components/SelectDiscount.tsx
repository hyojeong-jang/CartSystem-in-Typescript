import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Item } from '../types/index';
import { deleteDiscount } from '../modules/cart';
import { numberFormat } from '../utils/helper';

import styles from './css/SelectDiscount.module.css';

type SelectDiscountProps = {
  title: string;
  items: Item[];
  onClose: () => void;
}

const SelectDiscount = ({
  title,
  items,
  onClose
}: SelectDiscountProps) => {
  const dispatch = useDispatch();
  const onDelete = useCallback(() => dispatch(deleteDiscount(title)), []);

  return (
    <main className={styles.container}>
      <section className={styles.title}>{title}</section>
      <ul>
        {items.map((el, idx) => (
          <div className={styles.innerContainer}>
            <input
              type='checkbox'
              value={el.name}
              // defaultChecked={}
            />
            <span className={styles.name}>
              {`${el.name} ${el.count > 1 ? `x${el.count}` : ''}`}
            </span>
            <span className={styles.price}>
              {`${numberFormat(el.price * el.count)}원`}
            </span>
          </div>
        ))}
      </ul>
      <section>
        <button
          onClick={onDelete}
          className={styles.delete}
        >삭제</button>
        <button
          onClick={onClose}
          className={styles.ok}
        >확인</button>
      </section>
    </main>
  );
}

export default SelectDiscount
