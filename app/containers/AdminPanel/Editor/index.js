import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState, convertFromRaw } from 'draft-js';
import styled from 'styled-components';
import 'last-draft-js-sidebar-plugin/lib/plugin.css';
import plugins from './plugins';
import { InlineToolbar } from './plugins/tollbar';
import { AlignmentTool } from './plugins/common';
import placeholder from '../../../images/placeholder.png';
import 'last-draft-js-toolbar-plugin/lib/plugin.css';


export const EditorWrap = styled.div`
 padding: 17px;
 border: 1px solid #eee;
 figure {
   margin: 0;
 }
`;


const initialState = {
  entityMap: {
    kek: {
      type: 'image',
      mutability: 'IMMUTABLE',
      data: {
        src: placeholder,
      },
    },
  },
  blocks: [{
    key: '9gm3s',
    text: 'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',
    type: 'unstyled',
    depth: 0,
    inlineStyleRanges: [],
    entityRanges: [],
    data: {},
  }, {
    key: 'ov7r',
    text: ' ',
    type: 'atomic',
    depth: 0,
    inlineStyleRanges: [],
    entityRanges: [{
      offset: 0,
      length: 1,
      key: 'kek',
    }],
    data: {},
  }, {
    key: 'e23a8',
    text: 'See advanced examples further down …',
    type: 'unstyled',
    depth: 0,
    inlineStyleRanges: [],
    entityRanges: [],
    data: {},
  }],
};

class EditorApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(convertFromRaw(initialState)),
    };
    this.onEditorChange = this.onEditorChange.bind(this);
  }
  onEditorChange(editorState) {
    this.setState({ editorState });
  }

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div >
        <EditorWrap onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onEditorChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
          />
          <AlignmentTool></AlignmentTool>
          <InlineToolbar></InlineToolbar>
        </EditorWrap>

      </div>
    );
  }
}

export default EditorApp;
