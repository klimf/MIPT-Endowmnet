import { take, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../utils/api';
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

export function* getNewsData() {
  while (true) {
    try {
      const action = yield take(actions.fetchNewsData.types.start);
      const { id } = action.payload;
      const news = yield call(() => api.get(`/news/${id}`));
      yield put(actions.fetchNewsData.success(news));
    } catch (e) {
      yield put(actions.fetchNewsData.failed(e));
    }
  }
}

// All sagas to be loaded
export default [
  getNewsData,
];
