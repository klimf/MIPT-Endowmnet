import { createSelector } from 'reselect';

/**
 * Admin on rest state is not immutable
 */
const selectEditorDomain = () => (state) => state.editor;
const selectEditorState = () => (state) => state.editor.get('editorState');


const makeSelectEditorDomain = () => createSelector(
    selectEditorDomain(),
    (substate) => substate.toJS()
);

const makeSelectEditorState = () => createSelector(
    selectEditorState(),
    (substate) => substate
);

export default makeSelectEditorDomain;
export {
  makeSelectEditorState,
};

