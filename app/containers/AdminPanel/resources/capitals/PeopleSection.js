import React from 'react';
import { RaisedButton } from 'material-ui';
import _ from 'lodash';
import styled from 'styled-components';
import PeopleInput from './PeopleInput';


const propTypes = {
  items: React.PropTypes.array.isRequired,
};

const defaultProps = {
  items: [
    {
      _id: '1',
    },
    {
      _id: '2',
    },
    {
      _id: '3',
    },
  ],
};

const AddButton = styled(RaisedButton)`
  margin: 0 50%;
`;

const DeleteButton = styled(RaisedButton)`
  right: 0;
`;

class PeopleSection extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(index) {
    return () => {
      const newItems = _.clone(this.state.items);
      _.pullAt(newItems, [index]);
      this.setState({
        items: newItems,
      });
    };
  }

  addItem() {
    this.setState({
      items: _.concat(this.state.items, [{}]),
    });
  }

  render() {
    return (
      <div>
        { this.state.items.map((item, index) => (
          <div key={index}>
            <DeleteButton onClick={this.deleteItem(index)}>Удалить</DeleteButton>
            <PeopleInput {...item}></PeopleInput>
          </div>

        )) }
        <AddButton onClick={this.addItem}>Добавить</AddButton>
      </div>
    );
  }
}

PeopleSection.propTypes = propTypes;

PeopleSection.defaultProps = defaultProps;

export default PeopleSection;
