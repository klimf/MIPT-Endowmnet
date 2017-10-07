import { createReducer } from 'redux-act';
import { EditorState } from 'draft-js';
import { fromJS } from 'immutable';
import {
    editorStateChange,
    startSelectComponent,
    cancelSelectComponent,
    selectComponent,
} from './actions';

const initialState = fromJS({
  editorState: EditorState.createEmpty(),
  selectComponentPopupExpanded: false,
  selectedComponent: null,
});

export default createReducer({
  [editorStateChange]: (state, payload) => state.set('editorState', payload),
  [startSelectComponent]: (state) => state.set('selectComponentPopupExpanded', true),
  [cancelSelectComponent]: (state) => state.set('selectComponentPopupExpanded', false),
  [selectComponent]: (state, payload) => state
  .set('selectComponentPopupExpanded', false)
  .set('selectedComponent', payload),

}, initialState);
