import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';
import styled from 'styled-components';
import plugins from './plugins';
import { Toolbar } from './plugins/tollbar';


export const EditorWrap = styled.div`
 max-width: 960px;
 padding: 17px;
 border: 1px solid #eee;
 margin: 150px auto;
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
      <div className="App">
        <EditorWrap>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onEditorChange}
            plugins={plugins}
          />
          <Toolbar></Toolbar>
        </EditorWrap>
      </div>
    );
  }
}

export default EditorApp;
