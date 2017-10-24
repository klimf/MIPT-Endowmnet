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

export function* getHomeSection() {
  while (true) {
    try {
      yield take(actions.fetchHomeSection.types.start);
      const page = yield call(() => api.get('pages/home/section1'));
      yield put(actions.fetchHomeSection.success(page));
    } catch (e) {
      yield put(actions.fetchHomeSection.failed(e));
    }
  }
}


export function* getHomeBottomSection() {
  while (true) {
    try {
      yield take(actions.fetchHomeBottomSection.types.start);
      const page = yield call(() => api.get('pages/home/section2'));
      yield put(actions.fetchHomeBottomSection.success(page));
    } catch (e) {
      yield put(actions.fetchHomeBottomSection.failed(e));
    }
  }
}


// All sagas to be loaded
export default [
  getFundVolume,
  getHomeSection,
  getHomeBottomSection,
];
