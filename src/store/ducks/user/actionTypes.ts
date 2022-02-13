import { Action } from 'redux';
import { ISignInFormData } from '../../../components/SignInForm';
import { LoadingStatus } from '../../types';
import { UserState } from './contracts/state';

export enum UserActionsType {
  FETCH_SIGN_IN = 'USER/FETCH_SIGN_IN',
  AUTH_ME = 'USER/AUTH_ME',
  SET_USER_DATA = 'USER/SET_USER_DATA',
  SET_LOADING_STATE = 'USER/SET_LOADING_STATE',
  LOG_OUT = 'USER/LOG_OUT',
}

export interface IFetchSignInAction extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_IN;
  payload: {
    data: ISignInFormData;
  };
}

export interface ISetUserDataAction extends Action<UserActionsType> {
  type: UserActionsType.SET_USER_DATA;
  payload?: UserState['data'];
}

export interface IAuthMe extends Action<UserActionsType> {
  type: UserActionsType.AUTH_ME;
  payload: string;
}

export interface ISetLoadingStatus extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export interface ILogOutAction extends Action<UserActionsType> {
  type: UserActionsType.LOG_OUT;
}

export type UserActions =
  | IFetchSignInAction
  | ISetUserDataAction
  | ISetLoadingStatus
  | ILogOutAction
  | IAuthMe;
