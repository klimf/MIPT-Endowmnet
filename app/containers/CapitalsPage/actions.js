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

export const startDeleteCapitalBlock = createAction('START_DELETE_CAPITAL_BLOCK');

export const deleteCapitalBlock = createAction('DElETE_CAPITAL_BLOCK');

export const cancelDeleteCapitalBlock = createAction('CANCEL_DELETE_CAPITAL_BLOCK');

export const cancelAddNewCapital = createAction('CANCEL_ADD_NEW_CAPITAL');

export const showPopup = createAction('SHOW_POPUP');

export const cancelAddNewCapitalBlock = createAction('CANCEL_ADD_NEW_CAPITAL_BLOCK');

export const startAddNewCapitalBlock = createAction('START_ADD_NEW_CAPITAL_BLOCK');

