import { take, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../utils/api';


export function* getAllCapitals() {
  try {
    yield take(actions.fetchCapitals.types.start);
    const capitals = yield call(() => api.get('capitals').then((res) => res.data));
    yield put(actions.fetchCapitals.success(capitals));
  } catch (e) {
    yield put(actions.fetchCapitals.failed(e));
  }
}

export function* getMainCapital() {
  try {
    yield take(actions.fetchMainCapital.types.start);
    const capital = yield call(() => api.get('capitals/main').then((res) => res.data));
    yield put(actions.fetchMainCapital.success(capital));
  } catch (e) {
    yield put(actions.fetchMainCapital.failed(e));
  }
}


export function* updateCapital() {
  try {
    const action = yield take(actions.fetchUpdateCapital.types.start);
    const { id, ...data } = action.payload;
    if (!id) {
      const err = new Error('id is not specified');
      err.status = 600;
      throw err;
    }
    const capital = yield call(() => api.post(`capitals/${id}`, data).then((res) => res.data));
    yield put(actions.fetchUpdateCapital.success(capital));
  } catch (e) {
    yield put(actions.fetchUpdateCapital.failed(e));
  }
}

export function* deleteCapital() {
  try {
    const action = yield take(actions.fetchDeleteCapital.types.start);
    const { id } = action.payload;
    if (!id) {
      const err = new Error('id is not specified');
      err.status = 600;
      throw err;
    }
    const capital = yield call(() => api.delete(`capitals/${id}`).then((res) => res.data));
    yield put(actions.fetchDeleteCapital.success(capital));
  } catch (e) {
    yield put(actions.fetchDeleteCapital.failed(e));
  }
}

export function* createCapital() {
  try {
    const action = yield take(actions.fetchCreateCapital.types.start);
    const capital = yield call(() => api.post('capitals/', action.payload).then((res) => res.data));
    yield put(actions.fetchCreateCapital.success(capital));
  } catch (e) {
    yield put(actions.fetchCreateCapital.failed(e));
  }
}

// All sagas to be loaded
export default [
  getAllCapitals,
  getMainCapital,
  createCapital,
  updateCapital,
  deleteCapital,
  getCapital,
];
