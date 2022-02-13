import { AppStateType } from '../../rootReducer';
import { ItemsState } from './contracts/state';

export const selectItems = (state: AppStateType): ItemsState['data'] => state.items.data;
