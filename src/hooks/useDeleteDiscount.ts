import { useDispatch } from 'react-redux';

import { deleteDiscount } from '../modules/cart'

const useDeleteDiscount = (discount: string) => {
  const dispatch = useDispatch();

  return dispatch(deleteDiscount(discount));
}

export default useDeleteDiscount
