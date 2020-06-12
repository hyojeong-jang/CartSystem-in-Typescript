import { combineReducers } from 'redux';
import * as types from '../types/index';
import { optionsReducer as options } from './options';
import { cartReducer as cart } from './cart';

export interface StoreState {
  options: types.ServerData
  cart: types.Item
}

export const rootState = combineReducers<StoreState>({
  options,
  cart
});

export type RootState = ReturnType<typeof rootState>;
