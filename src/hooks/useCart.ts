import { useSelector } from 'react-redux';
import { RootState } from '../modules/index';

const useCart = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const discounts = useSelector((state: RootState) => state.cart.discounts)
  return { items, discounts };
};

export default useCart
