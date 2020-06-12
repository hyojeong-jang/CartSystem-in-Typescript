import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Item } from '../types/index';
import SelectBox from './SelectBox'
import { updateItem, deleteItem } from '../modules/cart';

import styles from './css/ItemCart.module.css';

const ItemCart = ({ name, price, count }: Item) => {
  const dispatch = useDispatch();

  const [ isOpened, setIsOpened ] = useState<boolean>(false);
  const [ onSelected, setOnSelected ] = useState<number>(count);

  const onClick = useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened])

  const onChange = useCallback(() => {
    dispatch(updateItem({ count: onSelected, name, price }));
    setIsOpened(!isOpened);
  }, [isOpened, onSelected])

  const onDelete = useCallback(() => {
    dispatch(deleteItem(name));
    setIsOpened(!isOpened);
  }, [isOpened])

  return (
    <main className={styles.container}>
      <ul className={styles.itemContainer}>
        <div className={styles.text}>
          <span>{name}</span>
          <span className={styles.price}>{price * count}</span>
        </div>
        <div
          onClick={onClick}
          className={styles.count}
        >
          {count}
        </div>
      </ul>
      {isOpened
        && <SelectBox
        title={name}
        defaultValue={count}
        buttonText='삭제'
        onSelected={setOnSelected}
        setClose={onDelete}
        setItem={onChange}
        />
      }
    </main>
  );
}

export default ItemCart
