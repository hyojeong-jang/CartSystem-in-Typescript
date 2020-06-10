import { useSelector } from 'react-redux';
import { RootState } from '../modules/index';

const useItems = () => {
  const items = useSelector((state: RootState) => state.options.items);
  return items;
};

export default useItems
