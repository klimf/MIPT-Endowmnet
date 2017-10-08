import { take, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from './actions';
import api from '../../utils/api';
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

export function* getPage() {
  while (true) {
    try {
      const action = yield take(actions.fetchPage.types.start);
      const pageAddress = action.payload.replace('p/', '');
      const page = yield call(() => api.get(`/pages/${pageAddress}`));
      yield put(actions.fetchPage.success(page));
    } catch (e) {
      if (e.status === 404) {
        yield put(push('/404'));
      }
      yield put(actions.fetchPage.failed(e));
    }
  }
}
// All sagas to be loaded
export default [
  getPage,
];
