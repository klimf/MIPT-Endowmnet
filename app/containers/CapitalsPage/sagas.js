import { take, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../utils/api';


export function* getAllCapitals() {
  while (true) {
    try {
      yield take(actions.fetchCapitals.types.start);
      const capitals = yield call(() => api.get('/capitals'));
      yield put(actions.fetchCapitals.success(capitals));
    } catch (e) {
      yield put(actions.fetchCapitals.failed(e));
    }
  }
}

export function* getСapitalsGrid() {
  while (true) {
    try {
      yield take(actions.fetchCapitalsGrid.types.start);
      const capitalsGrid = yield call(() => api.get('/capitals-layout'));
      yield put(actions.fetchCapitals.success(capitalsGrid));
    } catch (e) {
      yield put(actions.fetchCapitals.failed(e));
    }
  }
}

export function* updateCapitalsGrid() {
  while (true) {
    try {
      const action = yield take(actions.capitalsGridChange.getType());
      yield call(() => api.put('/capitals-layout', action.payload));
      yield put(actions.fetchCapitalsGridUpdate.success());
    } catch (e) {
      yield put(actions.fetchCapitalsGridUpdate.failed(e));
    }
  }
}


// All sagas to be loaded
export default [
  getAllCapitals,
  getСapitalsGrid,
  updateCapitalsGrid,
];
