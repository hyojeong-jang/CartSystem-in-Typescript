import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import useCart from '../hooks/useCart';

import { Item } from '../types/index';
import SelectBox from './SelectBox';
import { fetchItem, deleteItem } from '../modules/cart'

import styles from './css/ItemList.module.css';

const ItemList = ({ name, price, count }: Item) => {
  const dispatch = useDispatch();
  const { items } = useCart();
  const item = items.find(i => i.name === name);

  const [ defaultOption, setDefaultOption ] = useState<number>(count);
  const [ isOpened, setIsOpened ] = useState<boolean>(false);
  const [ onSelected, setOnSelected ] = useState<number>(1);

  const onChange = useCallback(() => {
    if (item) {
      dispatch(deleteItem(name));
    } else {
      setIsOpened(!isOpened);
    }
  }, [isOpened])

  const setItem = useCallback(() => {
    setIsOpened(!isOpened);
    setDefaultOption(onSelected);
    dispatch(fetchItem({ count: onSelected, name, price }));
  }, [onSelected, isOpened])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <input className={styles.checkbox}
            type='checkbox'
            value={String(count)}
            onChange={onChange}
          />
          <div className={styles.text}>
            <span className={styles.name}>{name}</span>
            <span className={styles.price}>{price}</span>
          </div>
        </div>
        {item
          && <div>{item.count}</div>
        }
      </div>
      {isOpened
        && <SelectBox
          title='총수'
          defaultValue={defaultOption}
          buttonText='선택 해제'
          onSelected={setOnSelected}
          setClose={onChange}
          setItem={setItem}
        />
      }
    </>
  );
}

export default ItemList
