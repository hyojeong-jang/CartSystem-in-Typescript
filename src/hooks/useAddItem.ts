import { useDispatch } from 'react-redux';
import { RootState } from '../modules/index';
import { Item } from '../types/index';

import { fetchItem } from '../modules/cart'

const useAddItem = (item: Item) => {
  const dispatch = useDispatch();

  return dispatch(fetchItem(item));
}

export default useAddItem
