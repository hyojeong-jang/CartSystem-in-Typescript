import * as types from '../types/index';

const FETCH_ITEM = 'FETCH_ITEM' as const;
const DELETE_ITEM = 'DELETE_ITEM' as const;

interface FetchItem {
  type: typeof FETCH_ITEM,
  payload: types.Item
}

interface DeleteItem {
  type: typeof DELETE_ITEM
  payload: string
}

export type actionTypes =
| FetchItem
| DeleteItem;

export const fetchItem = (item: types.Item) => ({
  type: FETCH_ITEM,
  payload: item
});

export const deleteItem = (item: string) => ({
  type: DELETE_ITEM,
  payload: item
});

const initialState: types.Cart = {
  items: [],
  discounts: []
}

export const cartReducer = (
  state = initialState,
  action: actionTypes
): types.Cart => {
  switch (action.type) {
    case FETCH_ITEM:
      return {
        ...state,
        items: state.items.concat(action.payload)
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.name !== action.payload)
      }
    default:
      return state;
  }
}