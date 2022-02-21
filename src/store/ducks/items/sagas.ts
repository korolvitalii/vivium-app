import { call, put, takeEvery } from 'redux-saga/effects';
import { ItemsApi } from '../../../services/api/ItemsApi';
import { IBook, LoadingStatus } from '../../types';
import { setLoadingStatus, setItems } from './actionCreators';
import { ItemsActionsType } from './actionTypes';

export function* fetchItemsRequest() {
  try {
    yield put(setLoadingStatus(LoadingStatus.LOADING));
    const data: IBook[] = yield call(ItemsApi.fetchItems);
    yield put(setItems(data));
    yield put(setLoadingStatus(LoadingStatus.LOADED));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* itemsSaga() {
  yield takeEvery(ItemsActionsType.FETCH_ITEMS, fetchItemsRequest);
}
