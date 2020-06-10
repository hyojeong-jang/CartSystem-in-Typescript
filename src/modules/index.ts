import { combineReducers } from 'redux';
import * as types from '../types/index';
import { optionsReducer as options } from '../actions/index'

export interface StoreState {
  options: types.ServerData
}

export default combineReducers<StoreState>({
  options
});

