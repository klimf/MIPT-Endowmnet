import React, { Component, PropTypes } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import styled from 'styled-components';
import imagePlugin from './plugins/image';
import toolbarOptions from './plugins/toolbar/options';
import AddComponent from './componentsService';


export const EditorWrap = styled.div`
 padding: 17px;
 border: 1px solid #eee;
 background: #fff;
`;

class EditorApp extends Component { // eslint-disable-line

  renderEditor(additionalProps) {
    return (<Editor
      toolbar={toolbarOptions}
      customBlockRenderFn={imagePlugin.blockRendererFn}
      toolbarCustomButtons={[<AddComponent />]}
      editorState={this.props.editorState}
      onEditorStateChange={this.props.editorStateChange}
      {...additionalProps}
    />);
  }

  render() {
    return (
      <div >
        { (this.props.editorState && this.props.editorStateChange) ?

          <EditorWrap >
            {this.renderEditor({
              editorState: this.props.editorState,
              onEditorStateChange: this.props.editorStateChange }
                )}
          </EditorWrap>

          : this.renderEditor({
            initialContentState: this.props.initialContentState,
            toolbarHidden: true,
          }
            )
        }

      </div>
    );
  }
}

EditorApp.propTypes = {
  initialContentState: PropTypes.string,
  editorState: PropTypes.any,
  editorStateChange: PropTypes.func,
};


export default EditorApp;
