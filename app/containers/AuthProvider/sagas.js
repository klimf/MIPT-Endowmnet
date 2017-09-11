import { take, call, put } from 'redux-saga/effects';
import api, { responseStates } from '../../utils/api';
import * as actions from './actions';

export function* getUser(action) {
  try {
    const user = action.payload ? action.payload : yield call(fetchCurrentUser);
    yield put(actions.fetchUser.success(user));
  } catch (e) {
    switch (e.status) {
      case 401:
        yield put(actions.fetchUser.failed(responseStates.UNATHORIZED));
        break;
      default:
        yield put(actions.fetchUser.failed(e));
        break;
    }
  }
}

export function* login(action) {
  try {
    const user = yield call(sendLogin, action.payload);
    yield put(actions.fetchLogin.success(null));
    yield put(actions.userChanged(user));
  } catch (e) {
    yield put(actions.fetchLogin.failed(e));
  }
}

export function* logout() {
  try {
    yield call(sendLogout);
    yield put(actions.fetchLogout.success(null));
    yield put(actions.userChanged(null));
  } catch (e) {
    yield put(actions.fetchLogout.failed(e));
  }
}


export function* registration(action) {
  try {
    const { id } = yield call(sendRegistrationData, action.payload);
    yield put(actions.fetchRegistration.success({ id }));
  } catch (e) {
    yield put(actions.fetchRegistration.failed(e));
  }
}

export function* recoveryPassword(action) {
  try {
    yield call(sendRecoveryPasswordToken, action.payload);
    yield put(actions.fetchRecoveryPassword.success());
  } catch (e) {
    yield put(actions.fetchRecoveryPassword.failed(e));
  }
}

export function* getRecoveryPasswordToken(action) {
  try {
    yield call(sendRecoveryPasswordTokenRequest, action.payload);
    yield put(actions.fetchGetRecoveryToken.success());
  } catch (e) {
    yield put(actions.fetchGetRecoveryToken.failed(e));
  }
}

export function* confirmEmail(action) {
  try {
    yield call(sendConfirmationEmailToken, action.payload);
    yield put(actions.fetchConfirm.success());
  } catch (e) {
    yield put(actions.fetchConfirm.failed(e));
  }
}

// All sagas to be loaded

function fetchCurrentUser() {
  return api.get('/users').then((res) => res.data);
}

function sendLogin(credentials) {
  return api.post('/users/login', credentials).then((res) => res.data);
}

function sendLogout() {
  return api.post('/users/logout').then((res) => res.data);
}

function sendRegistrationData(data) {
  return api.post('/users', data).then((res) => res.data);
}

function sendRecoveryPasswordTokenRequest({ email }) {
  return api.get('users/recovery-password', {
    params: {
      email,
    },
  })
   .then((res) => res.data);
}

function sendRecoveryPasswordToken({ token, password }) {
  return api.post(`users/recovery-password/${token}`, password).then((res) => res.data);
}

function sendConfirmationEmailToken({ token }) {
  return api.post(`users/confirm-email/${token}`).then((res) => res.data);
}

// Individual exports for testing
export function* defaultSaga() {
  // @ts-ignore
  yield take(actions.fetchUser.types.start, getUser);
    // @ts-ignore
  yield take(actions.userChanged.getType(), getUser);
    // @ts-ignore
  yield take(actions.fetchLogin.types.start, login);
    // @ts-ignore
  yield take(actions.fetchLogout.types.start, logout);
    // @ts-ignore
  yield take(actions.fetchConfirm.types.start, confirmEmail);
    // @ts-ignore
  yield take(actions.fetchGetRecoveryToken.types.start, getRecoveryPasswordToken);
    // @ts-ignore
  yield take(actions.fetchRecoveryPassword.types.start, recoveryPassword);
    // @ts-ignore
  yield take(actions.fetchRegistration.types.start, registration);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
