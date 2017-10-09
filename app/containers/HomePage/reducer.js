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
  fetchFundVolume,
} from './actions';


export default combineReducers({
  fundVolume: fetchReducerFactory(fetchFundVolume),
}, fromJS({}));

