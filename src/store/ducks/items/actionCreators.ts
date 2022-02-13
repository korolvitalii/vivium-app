import { IFetchItems, ISetItems, ISetLoadingStatus, ItemsActionsType } from './actionTypes';
import { ItemsState } from './contracts/state';

export const fetchItems = (): IFetchItems => ({
  type: ItemsActionsType.FETCH_ITEMS,
});

export const setItems = (payload: ItemsState['data']): ISetItems => ({
  type: ItemsActionsType.SET_ITEMS,
  payload,
});

export const setLoadingStatus = (payload: ItemsState['status']): ISetLoadingStatus => ({
  type: ItemsActionsType.SET_LOADING_STATE,
  payload,
});
