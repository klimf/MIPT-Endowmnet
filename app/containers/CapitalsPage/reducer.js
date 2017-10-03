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
  fetchCapitalsGrid,
  deleteCapitalBlock,
  startDeleteCapitalBlock,
  cancelDeleteCapitalBlock,
  startAddNewCapitalBlock,
  cancelAddNewCapitalBlock,
  capitalsGridChange,
} from './actions';
import * as constants from './constants';

export const capitalsGridReducer = createReducer({

  [startSelectCapitalComponent]: (state, payload) => state
  .set('configureCapital', fromJS(payload.data))
  .set('selectedGridComponent', fromJS(payload['data-grid']))
  .set('popup', constants.SELECT_BLOCK_POPUP),

  [cancelCapitalComponentSelection]: (state) => state
  .set('configureCapital', null)
  .set('popup', null),

  [setCapitalComponent]: (state, payload) => state
  .set('selectedGridComponent', fromJS(payload)),

  [saveCapitalConfiguration]: (state) => {
    const currentGrid = state.get('grid');
    const newDataGridItem = state.get('selectedGridComponent');

    if (!newDataGridItem) {
      return state.set('configureCapital', null).set('selectedGridComponent', null);
    }

    const oldItemIndex = currentGrid.findIndex((item) => item.get('id') === newDataGridItem.get('id'));

    const newGrid = oldItemIndex < 0
    ? currentGrid.push(newDataGridItem.setIn(['data-grid', 'x'], 0).setIn(['data-grid', 'y'], 0))
    : currentGrid.update(oldItemIndex, newDataGridItem, (old) => old.merge(newDataGridItem));

    return state
    .set('grid', newGrid)
    .set('configureCapital', null)
    .set('selectedGridComponent', null)
    .set('popup', null);
  },

  [startDeleteCapitalBlock]: (state) => state.set('popup', constants.DELETE_BLOCK_POPUP),

  [cancelDeleteCapitalBlock]: (state) => state.set('popup', constants.DELETE_BLOCK_POPUP),

  [deleteCapitalBlock]: (state, payload) => {
    const currentGrid = state.get('grid');

    if (!payload) {
      return state;
    }

    const toDeleteIndex = currentGrid.findIndex((item) => item.get('id') === payload.get('id'));

    if (toDeleteIndex < 1) {
      return state;
    }

    const newGrid = currentGrid.delete(toDeleteIndex);

    return state.set('grid', newGrid);
  },

  [startAddNewCapitalBlock]: (state) => state.set('popup', constants.NEW_CAPITAL_POPUP),
  [cancelAddNewCapitalBlock]: (state) => state.set('popup', null),
  [capitalsGridChange]: (state, payload) => state.set('grid', fromJS(payload)),

}, fromJS({
  configureCapital: null,
  selectedGridComponent: null,
  editable: false,
  grid: [],
  popup: null,
}));


export default combineReducers({
  grid: fetchReducerFactory(fetchCapitalsGrid),
  capitalsGrid: capitalsGridReducer,
  capitals: fetchReducerFactory(fetchCapitals),
}, fromJS({}));
