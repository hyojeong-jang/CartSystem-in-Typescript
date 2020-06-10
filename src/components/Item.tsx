import React from 'react';
import useItems from '../hooks/useItems';

import ItemList from '../components/ItemList';

const Item = () => {
  const items = useItems();

  return (
    <div>
      {Object.keys(items).map((key, idx) => (
        <ItemList
          key={idx}
          name={items[key].name}
          price={items[key].price}
          count={items[key].count}
        />
      ))
      }
    </div>
  );
}

export default Item
