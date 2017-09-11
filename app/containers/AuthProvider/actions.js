/*
 *
 * AuthProvider actions
 *
 */

import { FetchAction } from '../../utils/api';

export const getUser = new FetchAction('USER_GET');

export const login = new FetchAction('LOGIN');

export const logout = new FetchAction('LOGOUT');

export const confirm = new FetchAction('USER_CONFIRM');

export const recoveryPassword = new FetchAction('USER_RECOVERY_PASSWORD');

export const getRecoveryToken = new FetchAction('USER_GET_RECOVERY_TOKEN');
