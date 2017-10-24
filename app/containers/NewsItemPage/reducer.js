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
  fetchNewsData,
} from './actions';


export default combineReducers({
  newsData: fetchReducerFactory(fetchNewsData),
}, fromJS({}));

