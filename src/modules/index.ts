import { combineReducers } from 'redux';
import * as types from '../types/index';
import { optionsReducer as options } from './options'

export interface StoreState {
  options: types.ServerData
}

export const rootState = combineReducers<StoreState>({
  options
});

export type RootState = ReturnType<typeof rootState>;
