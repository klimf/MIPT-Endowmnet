import { take, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../utils/api';
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

export function* getNewsList() {
  while (true) {
    try {
      yield take(actions.fetchNews.types.start);
      const news = yield call(() => api.get('/news'));
      yield put(actions.fetchNews.success(news));
    } catch (e) {
      yield put(actions.fetchNews.failed(e));
    }
  }
}

// All sagas to be loaded
export default [
  getNewsList,
];
