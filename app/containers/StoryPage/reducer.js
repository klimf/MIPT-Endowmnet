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
  fetchStoriesData,
} from './actions';


export default combineReducers({
  StoriesData: fetchReducerFactory(fetchStoriesData),
}, fromJS({}));

