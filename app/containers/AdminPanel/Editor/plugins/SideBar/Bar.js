
import React from 'react';
import DraftOffsetKey from 'draft-js/lib/DraftOffsetKey';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  z-index: 3;
`;


class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      position: {
        transform: 'scale(0)',
        modalVisible: false,
        modal: null,
      },
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }


  componentDidMount() {
    this.props.store.subscribeToItem('editorState', this.onEditorStateChange);
  }

  componentWillUnmount() {
    this.props.store.unsubscribeFromItem('editorState', this.onEditorStateChange);
  }

  onEditorStateChange = (editorState) => {
    const selection = editorState.getSelection();
    const currentContent = editorState.getCurrentContent();
    const currentBlock = currentContent.getBlockForKey(selection.getStartKey());
    const offsetKey = DraftOffsetKey.encode(currentBlock.getKey(), 0, 0);
    // Note: need to wait on tick to make sure the DOM node has been create by Draft.js
    setTimeout(() => {
      const node = document.querySelectorAll(`[data-offset-key="${offsetKey}"]`)[0];
      const top = node.getBoundingClientRect().top;
      const editor = this.props.store.getItem('getEditorRef')().refs.editor;
      this.setState({
        position: {
          top: (top + window.scrollY),
          left: editor.getBoundingClientRect().left - 25,
          transform: 'scale(1)',
          transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
        },
      });
    }, 0);
  }

  openModal = (type) => {
    const modal = this.props.getModalByType(type);
    this.setState({ modal }, () => {
      this.setState({ modalVisible: true });
    });
  }

  closeModal = () => {
    this.setState({ modalVisible: false });
  }

  render() {
    const { theme, store } = this.props;
    const { modal, modalVisible } = this.state;
    const Modal = modal;

    return (
      <Wrapper
        style={this.state.position}
      >
        {
          modalVisible &&
          <Modal
            getEditorState={store.getItem('getEditorState')}
            setEditorState={store.getItem('setEditorState')}
            theme={theme}
            closeModal={this.closeModal}
            openModal={this.openModal}
          />
      }
        {
          this.props.structure.map((Component, index) => (
            <Component
              key={index}
              getEditorState={store.getItem('getEditorState')}
              setEditorState={store.getItem('setEditorState')}
              theme={theme}
              store={store}
              closeModal={this.closeModal}
              openModal={this.openModal}
            />
        ))
      }
      </Wrapper>
    );
  }
}

Sidebar.propTypes = {
  store: React.PropTypes.any,
  theme: React.PropTypes.any,
};

export default Sidebar;
