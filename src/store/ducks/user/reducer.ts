import { IUser, LoadingStatus } from '../../types';
import { UserActions, UserActionsType } from './actionTypes';
import { UserState } from './contracts/state';

const initialState: UserState = {
  data: undefined,
  status: LoadingStatus.NEVER,
};

type InitialStateType = typeof initialState;

export const userReducer = (state = initialState, action: UserActions): InitialStateType => {
  switch (action.type) {
    case UserActionsType.SET_USER_DATA: {
      let subset;
      if (action.payload) {
        const { name, email, lastLogin, notifications }: IUser = action.payload;
        subset = { name, email, lastLogin, notifications };
      }
      return { ...state, data: subset };
    }
    case UserActionsType.SET_LOADING_STATE: {
      return { ...state, status: action.payload };
    }
    case UserActionsType.LOG_OUT: {
      return { ...state, data: undefined, status: LoadingStatus.LOADING };
    }
    default:
      return state;
  }
};
