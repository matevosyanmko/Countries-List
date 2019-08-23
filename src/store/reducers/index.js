import { combineReducers } from 'redux';
import Countries from './countries';
export const Store = (state, action) => RootReducer(state, action);
const RootReducer = combineReducers({ Countries });
