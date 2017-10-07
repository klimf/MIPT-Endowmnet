/*
 *
 * AdminPanel reducer
 *
 */

import { createReducer } from 'redux-act';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import {
  addAttachment,
  clearAttachments,
  deleteAttachment,
} from './actions';

const attachmentsReducer = createReducer({
  [addAttachment]: (state, payload) => state.add(payload),
  [deleteAttachment]: (state, payload) => state.remove(payload),
  [clearAttachments]: (state) => state.clear(),
}, fromJS([]));

export default combineReducers({
  attachmets: attachmentsReducer,
}, fromJS({}));
