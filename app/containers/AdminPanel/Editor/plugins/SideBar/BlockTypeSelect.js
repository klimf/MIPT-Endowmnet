import React from 'react';
import styled from 'styled-components';

const BlockType = styled.div`
  box-sizing: border-box;
  background: #181818;
  color: #fff;
  margin: 0;
  border-radius: 13px;
  cursor: pointer;
  height: 26px;
  width: 26px;
  text-align: center;
  transition: all 0.3s ease;
  svg {
   transform: scale(0.7);
  }
`;

const Spacer = styled.div`
  position: absolute;
  left: 50 %;
  transform: translate(-50 %);
  width: 74px;
  height: 8px;
`;

const Popup = styled.div`
  position: absolute;
  left: 130px;
  transform: translate(-50 %);
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  display: flex;
  margin-top: -40px;
`;

export default class BlockTypeSelect extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      style: {
        transform: 'translate(-50%) scale(0)',
        transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
      },
    };
    this.onClick = this.onClick.bind(this);
    this.show = this.show.bin(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    this.props.store.subscribeToItem('editorState', this.onEditorStateChange);
  }

  onEditorStateChange = (editorState) => {
    this.hide();
  }

  onClick = (e) => {
    e.stopPropagation();
    return this.state.visible ? this.hide() : this.show();
  }

  show = () => {
    this.setState({
      visible: true,
      popupStyle: { transform: 'translate(-50%) scale(1)' },
      buttonStyle: { transform: 'rotate(45deg)', background: '#ccc' },
    });
  }

  hide = () => {
    this.setState({
      visible: false,
      popupStyle: { transform: 'translate(-50%) scale(0)' },
      buttonStyle: { transform: 'none', background: '#181818' },
    });
  }

  render() {
    const { theme, getEditorState, setEditorState } = this.props;
    const { popupStyle, buttonStyle } = this.state;
    return (
      <div onClick={this.onClick} >
        <BlockType style={buttonStyle}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <g fill="currentColor" >
              <path d="M11 6h2v12h-2z" />
              <path d="M18 11v2H6v-2z" />
            </g>
          </svg>
        </BlockType>
        {/*
          The spacer is needed so the popup doesn't go away when moving from the
          blockType div to the popup.
        */}
        <Spacer />
        <Popup style={popupStyle}>
          { this.props.structure.map((Component, index) => (
            <Component
              key={index}
              getEditorState={getEditorState}
              setEditorState={setEditorState}
              theme={theme.buttonStyles}
              closeModal={this.props.closeModal}
              openModal={this.props.openModal}
            />
          ))}
        </Popup>
      </div>
    );
  }
}
