/*
 *
 * CapitalsPage reducer
 *
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';
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
  deleteCapitalBlock,
} from './actions';

export const capitalsGridReducer = createReducer({
  [startSelectCapitalComponent]: (state, payload) => state
  .set('configureCapital', fromJS(payload.data))
  .set('selectedGridComponent', fromJS(payload['data-grid'])),

  [cancelCapitalComponentSelection]: (state) => state
  .set('configureCapital', null),

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

    return state.set('grid', newGrid).set('configureCapital', null).set('selectedGridComponent', null);
  },

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

  [capitalsGridChange]: (state, payload) => state.set('grid', fromJS(payload)),

  [toggleGridEditable]: (state) => state.update('editable', (option) => !option),

  [fetchCapitalsGrid.success]: (state, payload) => state.set('grid', fromJS(payload)),

}, fromJS({
  configureCapital: null,
  selectedGridComponent: null,
  editable: false,
  grid: [],
}));

export default combineReducers({
  grid: fetchReducerFactory(fetchCapitalsGrid),
  capitalsGrid: capitalsGridReducer,
  capitals: fetchReducerFactory(fetchCapitals),
  form: formReducer,
}, fromJS({}));
