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
  fetchUpdateCapital,
  fetchDeleteCapital,
  fetchCapitals,
  fetchMainCapital,
} from './actions';


export default combineReducers({
  currentCapital: fetchReducerFactory(fetchCapital),
  mainCapital: fetchReducerFactory(fetchMainCapital),
  updateCapital: fetchReducerFactory(fetchUpdateCapital),
  deleteCapital: fetchReducerFactory(fetchDeleteCapital),
  capitals: fetchReducerFactory(fetchCapitals),
}, fromJS({}));
