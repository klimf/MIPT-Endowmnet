/*
 *
 * CapitalPage reducer
 *
 */
/*
 *
 * CapitalsPage reducer
 *
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { fetchReducerFactory } from '../../utils/api';
import {
  fetchNav,
} from './actions';


export default combineReducers({
  nav: fetchReducerFactory(fetchNav),
}, fromJS({}));

export const stateName = 'Header';
