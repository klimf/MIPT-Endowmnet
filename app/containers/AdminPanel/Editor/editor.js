import React, { Component, PropTypes } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import styled from 'styled-components';
import toolbarOptions from './plugins/toolbar/options';
import AddComponent from './componentsService';


export const EditorWrap = styled.div`
 padding: 17px;
 border: 1px solid #eee;
 background: #fff;
 z-index: 50;
`;

class EditorApp extends Component { // eslint-disable-line}
  constructor(props) {
    super(props);
    try {
      this.state = {
        editorState: (!(this.props.editorState instanceof EditorState) && this.props.editorState) ?
        EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.editorState)))
        : this.props.editorState,
      };
    } catch (e) {
      this.state = {
        editorState: EditorState.createEmpty(),
      };
    }
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  onEditorStateChange(editorState) {
    try {
      this.setState({ editorState });
      this.props.editorStateChange(editorState);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div >
        <EditorWrap>
          <Editor
            toolbar={toolbarOptions}
            toolbarCustomButtons={[<AddComponent />]}
            editorState={this.state.editorState}
            onEditorStateChange={this.onEditorStateChange}
            initialContentState={this.props.initialContentState}
            toolbarHidden={this.props.toolbarHidden}
          />
        </EditorWrap>
      </div>
    );
  }
}

EditorApp.propTypes = {
  initialContentState: PropTypes.string,
  editorState: PropTypes.any,
  editorStateChange: PropTypes.func,
  toolbarHidden: PropTypes.bool,
};


export default EditorApp;
