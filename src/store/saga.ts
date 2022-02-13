import { all } from 'redux-saga/effects';
import { itemsSaga } from './ducks/items/sagas';
import { userSaga } from './ducks/user/sagas';

export default function* rootSaga() {
  yield all([itemsSaga(), userSaga()]);
}
