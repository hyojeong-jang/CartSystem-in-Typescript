import React from 'react';
import { Item } from '../types/index';

const ItemList = ({ name, price, count }: Item) => {
  return (
    <div>
      <p>{name}</p>
      <span>{price}</span>
      <span>{count}</span>
    </div>
  );
}

export default ItemList
