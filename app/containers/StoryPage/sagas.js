import { take, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../utils/api';
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

export function* getStoriesData() {
  while (true) {
    try {
      const action = yield take(actions.fetchStoriesData.types.start);
      const { id } = action.payload;
      const Stories = yield call(() => api.get(`/stories/${id}`));
      yield put(actions.fetchStoriesData.success(Stories));
    } catch (e) {
      yield put(actions.fetchStoriesData.failed(e));
    }
  }
}

// All sagas to be loaded
export default [
  getStoriesData,
];
