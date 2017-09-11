/*
 *
 * AuthProvider reducer
 *
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import {
  fetchLogin,
  fetchLogout,
  fetchConfirm,
  fetchRecoveryPassword,
  fetchGetRecoveryToken,
  fetchUser,
  fetchRegistration,
} from './actions';
import { fetchReducerFactory } from '../../utils/api';

export default combineReducers({
  user: fetchReducerFactory(fetchUser),
  login: fetchReducerFactory(fetchLogin),
  logout: fetchReducerFactory(fetchLogout),
  confirmation: fetchReducerFactory(fetchConfirm),
  recoveringPassword: fetchReducerFactory(fetchRecoveryPassword),
  recoveryToken: fetchReducerFactory(fetchGetRecoveryToken),
  registration: fetchReducerFactory(fetchRegistration),
}, fromJS({}));
