/*
 *
 * CapitalsPage reducer
 *
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { createReducer } from 'redux-act';
import { fetchReducerFactory } from '../../utils/api';

import {
  fetchCapitals,
  startSelectCapitalComponent,
  cancelCapitalComponentSelection,
  setCapitalComponent,
  saveCapitalConfiguration,
  capitalsGridChange,
  toggleGridEditable,
  fetchCapitalsGrid,
} from './actions';

const capitalsGridReducer = createReducer({
  [startSelectCapitalComponent]: (state, payload) => state
  .set('configureCapital', payload)
  .set('selectedGridComponent', null)
  .set('showComponentsPopup', true),

  [cancelCapitalComponentSelection]: (state) => state
  .set('configureCapital', null)
  .set('showComponentsPopup', false),

  [setCapitalComponent]: (state, payload) => state
  .set('selectedGridComponent', payload)
  .set('showComponentsPopup', false),

  [saveCapitalConfiguration]: (state) => {
    const currentGrid = state.get('grid');
    const newDataGrid = state.get('selectedGridComponent');
    const newGrid = currentGrid.map((x) => x.id !== newDataGrid.id ? x : Object.assign({}, x, newDataGrid));
    return state.set('grid', newGrid);
  },

  [capitalsGridChange]: (state, payload) => state.set('grid', payload),

  [toggleGridEditable]: (state) => state.set('editable', !state.get('editable')),

  [fetchCapitalsGrid.success]: (state, payload) => state.set('grid', payload),

}, fromJS({
  configureCapital: null,
  selectedGridComponent: null,
  showComponentsPopup: false,
  editable: false,
  grid: [],
}));

export default combineReducers({
  grid: fetchReducerFactory(fetchCapitalsGrid),
  capitalsGrid: capitalsGridReducer,
  capitals: fetchReducerFactory(fetchCapitals),
}, fromJS({}));
