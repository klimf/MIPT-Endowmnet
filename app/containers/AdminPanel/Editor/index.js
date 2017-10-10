import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import { EditorState } from 'draft-js';
import Editor, { EditorWrap } from './editor';

const EditorComponent = (field) =>
  <EditorWrap>
    <Editor editorStateChange={field.input.onChange} editorState={field.input.value} />;
  </EditorWrap>;


export default function EditorField({ source, validate }) {
  return (<Field defaultValue={EditorState.createEmpty()} name={source} validate={validate} component={EditorComponent} />);
}

EditorField.propTypes = {
  source: PropTypes.string,
  validate: PropTypes.array,
};


export function ContentPresentor({ rawJSON }) {
  return (
    <Editor
      initialContentState={JSON.parse(rawJSON)}
      toolbarHidden
      readOnly
    />
  );
}

ContentPresentor.propTypes = {
  rawJSON: PropTypes.string.isRequired,
};
