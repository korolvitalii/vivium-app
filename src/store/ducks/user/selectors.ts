import { AppStateType } from '../../rootReducer';
import { LoadingStatus } from '../../types';
import { UserState } from './contracts/state';

export const selectUserLoadingStatus = (state: AppStateType): UserState['status'] =>
  state.user.status;

export const selectUserData = (state: AppStateType): UserState['data'] => state.user.data;

export const selectIsAuth = (state: AppStateType): boolean => !!state.user.data;

export const selectErrors = (state: AppStateType): boolean =>
  state.user.status === LoadingStatus.ERROR;
