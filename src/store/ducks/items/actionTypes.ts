import { Action } from 'redux';
import { LoadingStatus } from '../../types';
import { ItemsState } from './contracts/state';

export enum ItemsActionsType {
  FETCH_ITEMS = 'ITEMS/FETCH_ITEMS',
  SET_ITEMS = 'ITEMS/SET_ITEMS',
  SET_LOADING_STATE = 'ITEMS/SET_LOADING_STATE',
}

export interface IFetchItems extends Action<ItemsActionsType> {
  type: ItemsActionsType.FETCH_ITEMS;
}

export interface ISetItems extends Action<ItemsActionsType> {
  type: ItemsActionsType.SET_ITEMS;
  payload: ItemsState['data'];
}

export interface ISetLoadingStatus extends Action<ItemsActionsType> {
  type: ItemsActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export type ItemsActions = IFetchItems | ISetItems | ISetLoadingStatus;
