import { Item } from '../types/index';

export const numberFormat = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const totalAmount = (items: Item[]): number => {
  let total: number = 0;

  items.forEach((item, idx) => {
    total += ( item.price * item.count );
    if (idx === items.length - 1) return total;
  })
  return total;
};

export const discount = (price: number, rate: number): string => {
  const savePrice = price * ((rate * 100 ) / 100);
  const resultPrice = price - savePrice;
  return  `-${numberFormat(Math.round(savePrice))}원`;
}
