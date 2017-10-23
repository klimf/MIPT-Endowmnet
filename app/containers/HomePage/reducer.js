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
  fetchHomeBottomSection,
  fetchHomeSection,
} from './actions';


export default combineReducers({
  fundVolume: fetchReducerFactory(fetchFundVolume),
  section1: fetchReducerFactory(fetchHomeSection),
  section2: fetchReducerFactory(fetchHomeBottomSection),
}, fromJS({}));

