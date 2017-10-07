import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import plusIcon from 'images/add-plus-button.svg';
import ComponentSelectModal from './ComponentSelectModal';
import { Quote } from './components';

const Button = styled.div`
    width: 24px;
    height: 24px;
    background: url(${plusIcon}) center no-repeat;
    background-size: contain;
`;

export default class AddComponentButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
    return (
      <div >
        <Button onClick={this.props.addComponentStart}></Button>
        {this.props.expanded &&
        <ComponentSelectModal
          onCancel={this.props.cancelAddComponent}
          onComponentSelect={this.props.onComponentSelect}
        >
          <Quote></Quote>
        </ComponentSelectModal>
        }
      </div>
    );
  }
}

AddComponentButton.propTypes = {
  expanded: PropTypes.bool,
  addComponentStart: PropTypes.func,
  onComponentSelect: PropTypes.func,
  cancelAddComponent: PropTypes.func,
};
