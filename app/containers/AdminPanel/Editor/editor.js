import React, { Component, PropTypes } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import { EditorState, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import toolbarOptions from './plugins/toolbar/options';

const EditorStickyWrap = styled.div`
position: relative;
padding-top: ${(props) => props.toolbarHeight + 10}px;
.rdw-editor-toolbar {
  position: absolute;
  ${(props) => props.sticky ? 'position: fixed;' : 'position: absolute;'}
  top: 0;
  z-index: 1000;
}
`;


class EditorApp extends Component { // eslint-disable-line}
  constructor(props) {
    super(props);
    const regularState = {
      contentState: this.props.initialContentState,
      sticky: false,
      toolbarHeight: 0,
    };
    try {
      this.state = {
        editorState: (!(this.props.editorState instanceof EditorState) && this.props.editorState) ?
        EditorState.createWithContent(convertFromRaw(this.props.editorState))
        : this.props.editorState,
      };
    } catch (e) {
      this.state = {
        editorState: EditorState.createEmpty(),
      };
    }
    this.state = Object.assign({}, this.state, regularState);

    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    window.addEventListener('resize', this.onResize, false);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
    window.removeEventListener('resize', this.onResize, false);
  }


  onEditorStateChange(editorState) {
    try {
      this.setState({ editorState });
      this.props.editorStateChange(editorState);
    } catch (e) {
      console.log(e);
    }
  }

  onScroll() {
    const topPoint = this.stickyWrap.getClientRects()['0'].y + this.state.toolbarHeight;
    const bottomPoint = (topPoint + this.stickyWrap.getClientRects()['0'].height) - this.state.toolbarHeight;
    if (topPoint <= 0 && bottomPoint >= 0 && !this.state.sticky) {
      this.setState({ sticky: true });
    } else if ((topPoint > 0 || bottomPoint < 0) && this.state.sticky) {
      this.setState({ sticky: false });
    }
  }

  onResize() {
    const toolbar = this.stickyWrap.querySelector('.rdw-editor-toolbar');
    this.setState({ toolbarHeight: toolbar.getClientRects()['0'].height });
  }

  render() {
    return (
      <div >
        {!this.props.readOnly ?
          <div ref={(c) => (this.stickyWrap = c)}>
            <EditorStickyWrap
              sticky={this.state.sticky}
              toolbarHeight={this.state.toolbarHeight}
            >
              <Editor
                toolbar={toolbarOptions}
                editorState={!this.props.initialContentState && this.state.editorState}
                onEditorStateChange={!this.props.initialContentState && this.onEditorStateChange}
              />
            </EditorStickyWrap>
          </div>


          :
          (<Editor
            editorState={this.props.editorState}
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
