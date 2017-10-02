/*
 *
 * CapitalsPage actions
 *
 */


import { createAction } from 'redux-act';
import { FetchAction } from '../../utils/api';

export const fetchCapitals = new FetchAction('FETCH_CAPITALS');

export const fetchCapitalsGridUpdate = new FetchAction('FETCH_CAPITALS_GRID_UPDATE');

export const startSelectCapitalComponent = createAction('START_SELECT_CAPITAL_COMPONENT');

export const cancelCapitalComponentSelection = createAction('CANCEL_CAPITAL_COMPONENT_SELECTION');

export const setCapitalComponent = createAction('SET_CAPITAL_COMPONENT');

export const saveCapitalConfiguration = createAction('SAVE_CAPITAL_CONFIGURATION');

export const toggleGridEditable = createAction('TOGGLE_GRID_EDITABLE');

export const fetchCapitalsGrid = new FetchAction('FETCH_CAPITALS_GRID');

export const capitalsGridChange = createAction('CAPITALS_GRID_CHANGED');
