import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';
import { media } from 'utils/helpers';
import { palette } from 'utils/constants';
import Editor from './editor';

const EditorWrap = styled.div`
padding: 17px;
border: 1px solid #eee;
z-index: 150;
background: ${palette.background};
figure {
  ${media.small`
   margin: 12px;
`}
 }
 owerlay: hoidden;
 .rdw-image-imagewrapper {
   max-width: 100%;
   display: block;
     img {
       max-width: 100%;
       ${media.medium`
          height: auto !important;
       `}
       ${media.small`
        height: auto !important;
        width: auto !important;
    `}
     
     }
 }
 iframe {
  max-width: 100%;
  margin: 0 auto;
  display: block;

  ${media.small`
  height: auto !important;
  width: auto !important;
  `}
 }
`;

const ContentPresentorWrap = styled.div`
 .rdw-editor-toolbar {
   height: 0;
 }
 figure {
  ${media.small`
   margin: 12px;
`}
 }
 owerlay: hoidden;
 .rdw-image-imagewrapper {
   max-width: 100%;
   display: block;
     img {
       max-width: 100%;
       ${media.medium`
          height: auto !important;
       `}
       ${media.small`
        height: auto !important;
        width: auto !important;
    `}
     
     }
 }
 iframe {
  max-width: 100%;
  margin: 0 auto;
  display: block;

  ${media.small`
  height: auto !important;
  width: auto !important;
  `}
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
