import * as types from '../types/index';

const FETCH_ITEM = 'FETCH_ITEM' as const;
const DELETE_ITEM = 'DELETE_ITEM' as const;
const UPDATE_ITEM = 'UPDATE_ITEM' as const;

const FETCH_DISCOUNT = 'FETCH_DISCOUNT' as const;
const DELETE_DISCOUNT = 'DELETE_DISCOUNT' as const;

interface FetchItem {
  type: typeof FETCH_ITEM,
  payload: types.Item
}

interface DeleteItem {
  type: typeof DELETE_ITEM
  payload: string
}

interface UpdateItem {
  type: typeof UPDATE_ITEM,
  payload: types.Item
}
interface FetchDiscount {
  type: typeof FETCH_DISCOUNT,
  payload: types.Discount
}

interface DeleteDiscount {
  type: typeof DELETE_DISCOUNT
  payload: string
}


export type actionTypes =
| FetchItem
| DeleteItem
| UpdateItem
| FetchDiscount
| DeleteDiscount;

export const fetchItem = (item: types.Item) => ({
  type: FETCH_ITEM,
  payload: item
});

export const deleteItem = (item: string) => ({
  type: DELETE_ITEM,
  payload: item
});

export const updateItem = (item: types.Item) => ({
  type: UPDATE_ITEM,
  payload: item
});

export const fetchDiscount = (discount: types.Discount) => ({
  type: FETCH_DISCOUNT,
  payload: discount
});

export const deleteDiscount = (discount: string) => ({
  type: DELETE_DISCOUNT,
  payload: discount
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
      };
    case UPDATE_ITEM:
      console.log(action.payload, '페이로드')
      return {
        ...state,
        items: state.items.map(item => {
          if (item.name === action.payload.name) {
            return {
              name: item.name,
              price: item.price,
              count: action.payload.count
            };
          }

          return item;
        })
      };
    case FETCH_DISCOUNT:
      return {
        ...state,
        discounts: state.discounts.concat(action.payload)
      };
    case DELETE_DISCOUNT:
      return {
        ...state,
        discounts: state.discounts.filter(discount => discount.name !== action.payload)
      }
    default:
      return state;
  }
}
