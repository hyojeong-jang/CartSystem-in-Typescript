import { useState, useCallback } from 'react';
import useAddItem from './useAddItem'
import { Item } from '../types/index'

const useSelectBoxActions = ({ name, count, price }: Item) => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  const setIsOpened = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onCancel = useCallback(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  return { setIsOpened, isOpen, onCancel };
}

export default useSelectBoxActions
