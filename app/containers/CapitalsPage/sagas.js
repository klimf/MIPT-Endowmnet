import { take, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../utils/api';

const formatCapitalsGrid = (capitalItem) => Object.assign(capitalItem, capitalItem.capitalId ? { id: capitalItem.capitalId } : { capitalId: capitalItem.id });

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
      yield put(actions.fetchCapitalsGrid.success(capitalsGrid.map(formatCapitalsGrid)));
    } catch (e) {
      yield put(actions.fetchCapitalsGrid.failed(e));
    }
  }
}

export function* mergeFetchedGrid() {
  while (true) {
    const action = yield take(actions.fetchCapitalsGrid.types.success);
    yield put(actions.capitalsGridChange(action.payload));
  }
}

export function* updateCapitalsGrid() {
  while (true) {
    try {
      const action = yield take(actions.fetchCapitalsGridUpdate.types.start);
      const formattedCapitals = action.payload.length ? action.payload.map(formatCapitalsGrid) : [];
      yield call(() => api.put('/capitals-layout', formattedCapitals));
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
  mergeFetchedGrid,
];
