/*
 *
 * AuthProvider reducer
 *
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import {
  login,
  logout,
  confirm,
  recoveryPassword,
  getRecoveryToken,
  getUser,
} from './actions';
import { fetchReducerFactory } from '../../utils/api';

export default combineReducers({
  user: fetchReducerFactory(getUser),
  login: fetchReducerFactory(login, (state) => state.set('status', 'success')),
  logout: fetchReducerFactory(logout, (state) => state.set('status', 'success')),
  confirmation: fetchReducerFactory(confirm, (state) => state.set('status', 'success')),
  recoveringPassword: fetchReducerFactory(recoveryPassword, (state) => state.set('status', 'success')),
  recoveryToken: fetchReducerFactory(getRecoveryToken),
}, fromJS({}));
