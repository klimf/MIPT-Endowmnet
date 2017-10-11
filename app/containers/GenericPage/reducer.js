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
  fetchPage,
  fetchPagesTree,
} from './actions';


export default combineReducers({
  currentPage: fetchReducerFactory(fetchPage),
  tree: fetchReducerFactory(fetchPagesTree),
}, fromJS({}));

