import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import { EditorState } from 'draft-js';
import Editor from './editor';

const EditorComponent = (field) =>
  <Editor editorStateChange={field.input.onChange} editorState={field.input.value} />;


export default function EditorField({ source, validate }) {
  return (<Field defaultValue={EditorState.createEmpty()} name={source} validate={validate} component={EditorComponent} />);
}

EditorField.propTypes = {
  source: PropTypes.string,
  validate: PropTypes.array,
};
