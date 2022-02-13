import { combineReducers } from 'redux';
import { itemsReducer } from './ducks/items/reducer';
import { userReducer } from './ducks/user/reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  items: itemsReducer,
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;
