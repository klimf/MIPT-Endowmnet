/*
 *
 * CapitalsPage actions
 *
 */


import { FetchAction } from '../../utils/api';

export const fetchCapitals = new FetchAction('FETCH_CAPITALS');

export const fetchMainCapital = new FetchAction('FETCH_MAIN_CAPITAL');

export const fetchCreateCapital = new FetchAction('CREATE_CAPITAL');

export const fetchUpdateCapital = new FetchAction('UPDATE_CAPITAL');

export const fetchDeleteCapital = new FetchAction('DELETE_CAPITAL');

export const fetchCapital = new FetchAction('FETCH_CAPITAL');
