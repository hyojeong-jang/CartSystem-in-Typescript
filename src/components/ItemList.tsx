import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Item } from '../types/index';
import SelectBox from './SelectBox';
import { fetchItem } from '../modules/cart'

import styles from './css/ItemList.module.css';

const ItemList = ({ name, price, count }: Item) => {
  const dispatch = useDispatch();

  const [ isChecked, setIsCheck ] = useState<boolean>(false);
  const [ onSelected, setOnSelected ] = useState<number | null>(null);

  const onChecked = useCallback(() => setIsCheck(!isChecked), [isChecked]);
  const setItem = useCallback(() => {
    setIsCheck(!isChecked);
    dispatch(fetchItem({ count: onSelected, name, price }));
  }, [onSelected])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <input className={styles.checkbox}
            type='checkbox'
            value={String(count)}
            checked={isChecked}
            onChange={onChecked}
          />
          <div className={styles.text}>
            <span className={styles.name}>{name}</span>
            <span className={styles.price}>{price}</span>
          </div>
        </div>
      </div>
      {isChecked
        && <SelectBox
          title='총수'
          defaultValue={Number(count)}
          buttonText='선택 해제'
          onSelected={setOnSelected}
          setClose={onChecked}
          setItem={setItem}
        />
      }
    </>
  );
}

export default ItemList
