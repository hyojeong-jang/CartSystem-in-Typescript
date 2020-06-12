import * as types from '../types/index';

const FETCH_ITEM = 'FETCH_ITEM' as const;

interface FetchItem {
  type: typeof FETCH_ITEM,
  payload: types.Item
}

export type actionTypes =
| FetchItem;

export const fetchItem = (item: types.Item) => ({
  type: FETCH_ITEM,
  payload: item
});

const initialState: types.Item = {
  name: null,
  price: null,
  count: null
};

export const cartReducer = (
  state = initialState,
  action: actionTypes
): types.Item => {
  switch (action.type) {
    case FETCH_ITEM:
      return {
        name: action.payload.name,
        price: action.payload.price,
        count: action.payload.count
      };
    default:
      return state;
  }
}