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
  fetchCapital,
} from './actions';


export default combineReducers({
  currentCapital: fetchReducerFactory(fetchCapital),
}, fromJS({}));

