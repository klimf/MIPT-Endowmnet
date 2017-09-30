/*
 *
 * CapitalsPage actions
 *
 */


import { FetchAction } from '../../utils/api';
import { createAction } from 'redux-act';

export const fetchCapitals = new FetchAction('FETCH_CAPITALS');

export const fetchMainCapital = new FetchAction('FETCH_MAIN_CAPITAL');

export const fetchCreateCapital = new FetchAction('CREATE_CAPITAL');

export const fetchUpdateCapital = new FetchAction('UPDATE_CAPITAL');

export const fetchDeleteCapital = new FetchAction('DELETE_CAPITAL');

export const fetchCapital = new FetchAction('FETCH_CAPITAL');

export const startSelectCapitalComponent = createAction('СAPITAL_COMOPENT_SELECT_START');

export const setCapitalComponent = createAction('SET_CAPITAL_COMPONENT');

export const addNewCapitalBlock = createAction('ADD_NEW_CAPITAL_BLOCK');

export const cancelCapitalComponentSelection = createAction('CANCEL_CAPITAL_COMPONENT_SELECTION');

export const saveCapitalConfiguration = createAction('SAVE_CAPITAL_CONFIGURATION');

export const capitalsGridChange = createAction('CAPITALS_GRID_CHANGE');

export const fetchCapitalsGridUpdate = new FetchAction('CAPITALS_GRID_UPDATE');

export const fetchCapitalsGrid = new FetchAction('CAPITALS_GRID_FETCH');

export const toggleGridEditable = createAction('TOGGLE_GRID_EDITABLE');
