import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Item } from '../types/index';
import SelectBox from './SelectBox'
import { updateItem, deleteItem } from '../modules/cart'
;

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
    <main>
      <ul>
        <div>
          <span>{name}</span>
          <span>{price * count}</span>
        </div>
        <div
          onClick={onClick}
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
