import { ServerResponse } from '../types/index';
import * as types from '../types/index';

const FETCH_DATA = 'FETCH_DATA' as const;

interface FetchData {
  type: typeof FETCH_DATA,
  payload: types.ServerData
}

export type actionTypes =
| FetchData;

export const fetchData = (response: ServerResponse) => ({
  type: FETCH_DATA,
  payload: response
})

const initialState: types.ServerData = {
  currency_code: '',
  discounts: {},
  items: {}
};

export const optionsReducer = (
  state = initialState,
  action: actionTypes
): types.ServerData => {
  switch (action.type){
    case FETCH_DATA:
      return {
        currency_code: action.payload.currency_code,
        discounts: action.payload.discounts,
        items: action.payload.items
      };
    default:
      return state;
  }
}