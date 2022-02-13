import { LoadingStatus } from '../../types';
import { ItemsActions, ItemsActionsType } from './actionTypes';
import { ItemsState } from './contracts/state';

const initialState: ItemsState = {
  data: undefined,
  status: LoadingStatus.NEVER,
};

type InitialStateType = typeof initialState;

export const itemsReducer = (state = initialState, action: ItemsActions): InitialStateType => {
  switch (action.type) {
    case ItemsActionsType.SET_ITEMS: {
      return { ...state, data: action.payload };
    }
    case ItemsActionsType.SET_LOADING_STATE: {
      return { ...state, status: action.payload };
    }
    default:
      return state;
  }
};
