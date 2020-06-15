import React from 'react';
import useCart from '../hooks/useCart';

import ItemCart from './ItemCart';
import DiscountCart from './DiscountCart';
import TotalAmount from './TotalAmount';

import { totalAmount, applyDiscount } from '../utils/helper'

const Cart = () => {
  const { items, discounts } = useCart();

  return (
  <>
    <main>
      <section>
        {items.map((item, idx) => (
          <ItemCart
            key={idx}
            name={item.name}
            price={item.price}
            count={item.count}
          />
        ))}
      </section>
      <section>
        {discounts.map((discount, idx) => (
          <DiscountCart
            key={idx}
            name={discount.name}
            rate={discount.rate}
          />
        ))}
      </section>
    </main>
    <TotalAmount total={applyDiscount(totalAmount(items),discounts) } />
  </>
  );
};

export default Cart
