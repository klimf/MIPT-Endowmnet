import { take, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../utils/api';
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}


export function* getNav() {
  while (true) {
    try {
      yield take(actions.fetchNav.types.start);
      const tree = yield call(() => api.get('/navigation-layout'));
      yield put(actions.fetchNav.success(tree));
    } catch (e) {
      yield put(actions.fetchNav.failed(e));
    }
  }
}
// All sagas to be loaded
export default [
  getNav,
];
