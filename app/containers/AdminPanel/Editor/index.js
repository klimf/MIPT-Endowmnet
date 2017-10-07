import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import styled from 'styled-components';
import imagePlugin from './plugins/image';
import toolbarOptions from './plugins/toolbar/options';

export const EditorWrap = styled.div`
 padding: 17px;
 border: 1px solid #eee;
 background: #fff;
`;


class EditorApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.onEditorChange = this.onEditorChange.bind(this);
  }
  onEditorChange(editorState) {
    this.setState({ editorState });
  }


  render() {
    return (
      <div >
        <EditorWrap >
          <Editor
            toolbar={toolbarOptions}
            customBlockRenderFn={imagePlugin.blockRendererFn}
            editorState={this.state.editorState}
            onEditorStateChange={this.onEditorChange}
            ref={(element) => { this.editor = element; }}
          />
        </EditorWrap>

      </div>
    );
  }
}

export default EditorApp;
