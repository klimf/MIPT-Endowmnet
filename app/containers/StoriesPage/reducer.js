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
  fetchStories,
} from './actions';


export default combineReducers({
  Stories: fetchReducerFactory(fetchStories),
}, fromJS({}));

