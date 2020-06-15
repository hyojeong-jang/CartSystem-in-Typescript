import { Item, Discount } from '../types/index';

export const numberFormat = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};



export const totalAmount = (items: Item[]): number => {
  let total: number = 0;

  items.forEach((item, idx) => {
    total += (item.price * item.count);
    if (idx === items.length - 1) return total;
  })

  return total;
};

export const discount = (price: number, rate: number): number => {
  const savePrice = price * ((rate * 100 ) / 100);
  const resultPrice = price - savePrice;
  // return  `-${numberFormat(Math.round(savePrice))}원`;
  return savePrice
}
<<<<<<< HEAD
=======

export const applyDiscount = (total: number, discounts: Discount[]): number => {
  let totalDiscount: number = 0;

  discounts.forEach((item, idx) => {
    totalDiscount += (total * (item.rate * 100) / 100);
    if (idx === discounts.length - 1) return totalDiscount;
  })

  return total - totalDiscount;
}
>>>>>>> feature/mainCart
