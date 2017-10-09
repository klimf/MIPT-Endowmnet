import { createAction } from 'redux-act';

export const editorStateChange = createAction('EDITOR_STATE_CHANGE');

export const startSelectComponent = createAction('START_SELECT_COMPONENT');

export const cancelSelectComponent = createAction('CANCEL_SELECT_COMPONENT');

export const selectComponent = createAction('SELECT_COMPONENT');
