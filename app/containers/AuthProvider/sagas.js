import { take, call, put } from 'redux-saga/effects';
import api, { responseStates } from '../../utils/api';
import * as actions from './actions';

export function* getUser() {
  while (true) {
    try {
      yield take(actions.fetchUser.types.start);
      const user = yield call(fetchCurrentUser);
      yield put(actions.fetchUser.success(user));
    } catch (e) {
      console.log(e);
      if (e) {
        switch (e.status) {
          case 401:
            yield put(actions.fetchUser.failed(responseStates.UNATHORIZED));
            break;
          default:
            yield put(actions.fetchUser.failed(e));
            break;
        }
      } else {
        yield put(actions.fetchUser.failed(responseStates.NETWORK_ERROR));
      }
    }
  }
}

export function* login() {
  while (true) {
    try {
      const action = yield take(actions.fetchLogin.types.start);
      yield call(sendLogin, action.payload);
      yield put(actions.fetchLogin.success());
      yield put(actions.fetchUser.start());
    } catch (e) {
      yield put(actions.fetchLogin.failed(e));
    }
  }
}

export function* logout() {
  try {
    yield take(actions.fetchLogout.types.start);
    yield call(sendLogout);
    yield put(actions.fetchLogout.success(null));
    yield put(actions.userChanged(null));
  } catch (e) {
    yield put(actions.fetchLogout.failed(e));
  }
}

export function* registration(action) {
  try {
    yield take(actions.fetchRegistration.types.start);
    const { id } = yield call(sendRegistrationData, action.payload);
    yield put(actions.fetchRegistration.success({ id }));
  } catch (e) {
    yield put(actions.fetchRegistration.failed(e));
  }
}

export function* recoveryPassword(action) {
  try {
    yield take(actions.fetchRecoveryPassword.types.start);
    yield call(sendRecoveryPasswordToken, action.payload);
    yield put(actions.fetchRecoveryPassword.success());
  } catch (e) {
    yield put(actions.fetchRecoveryPassword.failed(e));
  }
}

export function* getRecoveryPasswordToken(action) {
  try {
    yield take(actions.fetchGetRecoveryToken.types.start);
    yield call(sendRecoveryPasswordTokenRequest, action.payload);
    yield put(actions.fetchGetRecoveryToken.success());
  } catch (e) {
    yield put(actions.fetchGetRecoveryToken.failed(e));
  }
}

export function* confirmEmail(action) {
  try {
    yield take(actions.fetchConfirm.types.start);
    yield call(sendConfirmationEmailToken, action.payload);
    yield put(actions.fetchConfirm.success());
  } catch (e) {
    yield put(actions.fetchConfirm.failed(e));
  }
}

// All sagas to be loaded

function fetchCurrentUser() {
  return api.get('/me');
}

function sendLogin(credentials) {
  return api.post('/login', credentials);
}

function sendLogout() {
  return api.post('/logout');
}

function sendRegistrationData(data) {
  return api.post('/users', data);
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


// All sagas to be loaded
export default [
  getUser,
  login,
  logout,
  confirmEmail,
  recoveryPassword,
  getRecoveryPasswordToken,
  registration,
];
