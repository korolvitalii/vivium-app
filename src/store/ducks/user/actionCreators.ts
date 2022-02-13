import { ISignInFormData } from '../../../components/SignInForm';
import {
  IAuthMe,
  IFetchSignInAction,
  ILogOutAction,
  ISetLoadingStatus,
  ISetUserDataAction,
  UserActionsType,
} from './actionTypes';
import { UserState } from './contracts/state';

export const fetchSignIn = (data: ISignInFormData): IFetchSignInAction => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload: {
    data,
  },
});

export const authMe = (payload: string): IAuthMe => ({
  type: UserActionsType.AUTH_ME,
  payload,
});

export const setUserData = (payload: UserState['data']): ISetUserDataAction => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});

export const setLoadingStatus = (payload: UserState['status']): ISetLoadingStatus => ({
  type: UserActionsType.SET_LOADING_STATE,
  payload,
});

export const logOut = (): ILogOutAction => ({
  type: UserActionsType.LOG_OUT,
});
