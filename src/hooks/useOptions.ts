import { useSelector } from 'react-redux';
import { RootState } from '../modules/index';

const useOptions = () => {
  const items = useSelector((state: RootState) => state.options.items);
  const discounts = useSelector((state: RootState) => state.options.discounts);
  return { items, discounts };
};

export default useOptions
