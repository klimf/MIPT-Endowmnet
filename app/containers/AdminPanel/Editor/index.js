import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
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

const EditorComponent = (field) => (<EditorWrap>
  <Editor editorStateChange={field.input.onChange} editorState={field.input.value} />
</EditorWrap>);


export default function EditorField({ source, name, validate }) {
  return (<Field name={name || source} validate={validate} component={EditorComponent} />);
}

EditorField.propTypes = {
  source: PropTypes.string,
  validate: PropTypes.array,
  name: PropTypes.string,
};


export function ContentPresentor({ raw }) {
  const contentState = typeof raw === 'string' ? JSON.parse(raw) : raw;
  return (
    <ContentPresentorWrap>
      <Editor
        initialContentState={contentState}
        toolbarHidden
        readOnly
      />
    </ContentPresentorWrap>
  );
}

ContentPresentor.propTypes = {
  raw: PropTypes.string.isRequired,
};
