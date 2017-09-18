/*
 *
 * AuthProvider actions
 *
 */

import { createAction } from 'redux-act';
import { FetchAction } from '../../utils/api';


export const fetchUser = new FetchAction('USER_GET');

export const fetchLogin = new FetchAction('LOGIN');

export const fetchLogout = new FetchAction('LOGOUT');

export const fetchConfirm = new FetchAction('USER_CONFIRM');

export const fetchRegistration = new FetchAction('USER_REGISTRATION');

export const fetchRecoveryPassword = new FetchAction('USER_RECOVERY_PASSWORD');

export const fetchGetRecoveryToken = new FetchAction('USER_GET_RECOVERY_TOKEN');

export const userChanged = createAction('USER_CHANGED', (data) => data);

