import { take, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { ADMIN_ROLE } from '../AuthProvider/constants';
import { fetchLogin, fetchUser } from '../AuthProvider/actions';
// Individual exports for testing

export function* defaultSaga() {
  while (true) {
    yield take(fetchLogin.success);
    const action = yield take(fetchUser.success);
    if (action.payload.role === ADMIN_ROLE) {
      yield put(push('/admin'));
    }
  }
}

// All sagas to be loaded
export default [
  defaultSaga,
];
