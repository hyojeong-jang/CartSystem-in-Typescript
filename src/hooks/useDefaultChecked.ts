import { useSelector } from 'react-redux';
import { RootState } from '../modules/index';

const useDefaultChecked = (name: string) => {
  const discounts = useSelector((state: RootState) => state.cart.discounts);
  const existItem = discounts.find(discount => discount.name === name);

  if (existItem) {
    return true;
  } else {
    return false;
  }
};

export default useDefaultChecked
