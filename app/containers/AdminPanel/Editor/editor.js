import React, { Component, PropTypes } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import toolbarOptions from './plugins/toolbar/options';
import AddComponent from './componentsService';


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
    this.state = Object.assign({}, this.state, {
      contentState: this.props.initialContentState,
    });
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
        {!this.props.readOnly ?
            (<Editor
              toolbar={toolbarOptions}
              toolbarCustomButtons={[<AddComponent />]}
              editorState={!this.props.initialContentState && this.state.editorState}
              onEditorStateChange={!this.props.initialContentState && this.onEditorStateChange}
            />)
          :
          (<Editor
            initialContentState={this.props.initialContentState}
            toolbarHidden={this.props.toolbarHidden}
            readOnly
          />)
        }

      </div>
    );
  }
}

EditorApp.propTypes = {
  initialContentState: PropTypes.object,
  editorState: PropTypes.any,
  editorStateChange: PropTypes.func,
  toolbarHidden: PropTypes.bool,
  readOnly: PropTypes.bool,
};


export default EditorApp;
