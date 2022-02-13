import { call, put, takeEvery } from 'redux-saga/effects';
import { AuthMeResponse, SignInResponse, UserApi } from '../../../services/api/UserApi';
import { LoadingStatus } from '../../types';
import { authMe, setLoadingStatus, setUserData } from './actionCreators';
import { IFetchSignInAction, UserActionsType } from './actionTypes';

export function* fetchSignInRequest({ payload }: IFetchSignInAction) {
  try {
    yield put(setLoadingStatus(LoadingStatus.LOADING));
    const data: SignInResponse = yield call(UserApi.signIn, payload.data);
    if (data) {
      window.localStorage.setItem('Authorization', data.token);
      window.localStorage.setItem('email', payload.data.email);
    }
    yield put(authMe(payload.data.email));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* authMeRequest({ payload }: any) {
  try {
    yield put(setLoadingStatus(LoadingStatus.LOADING));
    const data: AuthMeResponse = yield call(UserApi.authMe, payload);
    yield put(setUserData(data));
    yield put(setLoadingStatus(LoadingStatus.LOADED));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* userSaga() {
  yield takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
  yield takeEvery(UserActionsType.AUTH_ME, authMeRequest);
}
