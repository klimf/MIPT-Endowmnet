import React, { Component, PropTypes } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import styled from 'styled-components';
import imagePlugin from './plugins/image';
import toolbarOptions from './plugins/toolbar/options';
import AddComponent from './componentsService';
import {
  editorStateChange,
} from './actions';
import {
  makeSelectEditorState,
} from './selectors';

export const EditorWrap = styled.div`
 padding: 17px;
 border: 1px solid #eee;
 background: #fff;
`;

class EditorApp extends Component { // eslint-disable-line

  render() {
    return (
      <div >
        <EditorWrap >
          <Editor
            toolbar={toolbarOptions}
            customBlockRenderFn={imagePlugin.blockRendererFn}
            editorState={this.props.editorState}
            onEditorStateChange={this.props.editorStateChange}
            toolbarCustomButtons={[<AddComponent />]}
          />
        </EditorWrap>

      </div>
    );
  }
}

EditorApp.propTypes = {
  editorState: PropTypes.any,
  editorStateChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  editorState: makeSelectEditorState(),
});

const mapDispatchToProps = (dispatch) => ({
  editorStateChange: editorStateChange.bindTo(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorApp);
