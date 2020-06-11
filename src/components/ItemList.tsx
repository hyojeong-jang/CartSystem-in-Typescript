import React, { useState, useCallback } from 'react';
import { Item } from '../types/index';
import SelectBox from './SelectBox';

import styles from './css/ItemList.module.css';

export type Selected = {
  item: string;
  count: number;
};

const ItemList = ({ name, price, count }: Item) => {
  const [ isChecked, setIsCheck ] = useState<boolean>(false);
  const [ onSelected, setOnSelected ] = useState<Selected | null>(null);

  const onChecked = useCallback(() => setIsCheck(!isChecked), [isChecked]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <input className={styles.checkbox}
            type='checkbox'
            value={count}
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
          title='수량'
          count={count}
          buttonText='선택 해제'
          onSelected={setOnSelected}
        />
      }
    </>
  );
}

export default ItemList
