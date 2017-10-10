import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import { EditorState } from 'draft-js';
import styled from 'styled-components';
import Editor from './editor';

const EditorWrap = styled.div`
padding: 17px;
border: 1px solid #eee;
background: #fff;
z-index: 50;
`;

const ContentPresentorWrap = styled.div`
 .rdw-editor-toolbar {
   height: 0;
 }
`;


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
    <ContentPresentorWrap>
      <Editor
        initialContentState={JSON.parse(rawJSON)}
        toolbarHidden
        readOnly
      />
    </ContentPresentorWrap>
  );
}

ContentPresentor.propTypes = {
  rawJSON: PropTypes.string.isRequired,
};
