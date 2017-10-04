import { take, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../utils/api';
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

export function* getCapital() {
  while (true) {
    try {
      const action = yield take(actions.fetchCapital.types.start);
      const { capitalName } = action.payload;
      if (!capitalName) {
        const err = new Error('capitalName is not specified');
        err.status = 600;
        yield put(actions.fetchCapital.failed(err));
      }
      const capital = yield call(() => api.get(`/capitals/${capitalName}`));
      yield put(actions.fetchCapital.success(capital));
    } catch (e) {
      yield put(actions.fetchCapital.failed(e));
    }
  }
}
// All sagas to be loaded
export default [
  getCapital,
];
