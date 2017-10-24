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
  fetchNews,
} from './actions';


export default combineReducers({
  news: fetchReducerFactory(fetchNews),
}, fromJS({}));

