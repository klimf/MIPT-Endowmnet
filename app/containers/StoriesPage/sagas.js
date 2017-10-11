import { take, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../utils/api';
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

export function* getStoriesList() {
  while (true) {
    try {
      yield take(actions.fetchStories.types.start);
      const Stories = yield call(() => api.get('/stories'));
      yield put(actions.fetchStories.success(Stories));
    } catch (e) {
      yield put(actions.fetchStories.failed(e));
    }
  }
}

// All sagas to be loaded
export default [
  getStoriesList,
];
