import { take, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../utils/api';
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

export function* getFundVolume() {
  while (true) {
    try {
      yield take(actions.fetchFundVolume.types.start);
      const page = yield call(() => api.get('/capitals/volume'));
      yield put(actions.fetchFundVolume.success(page));
    } catch (e) {
      yield put(actions.fetchFundVolume.failed(e));
    }
  }
}

// All sagas to be loaded
export default [
  getFundVolume,
];
