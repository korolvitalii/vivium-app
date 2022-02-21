import { AppStateType } from '../../rootReducer';
import { ItemsState } from './contracts/state';

export const selectItems = (state: AppStateType): ItemsState['data'] => state.items.data;

export const selectLoadingStatus = (state: AppStateType): ItemsState['status'] =>
  state.items.status;
