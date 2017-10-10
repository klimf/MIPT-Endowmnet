
import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';
import styled from 'styled-components';
import PeopleInput from './QuoteInput';
import FacesInput from './PeopleRowInput';
const AddButton = styled(RaisedButton)`
  margin: 0 50%;
`;

const renderPeopleFields = ({ fields }) => (
  <div>
    { fields.map(PeopleInput) }
    <AddButton
      onClick={() => fields.push({
        type: 'quote',
      })}
    >Добавить</AddButton>
  </div>
  );

renderPeopleFields.propTypes = {
  fields: React.PropTypes.object,
};

const mapFormsTypes = {
  quote: PeopleInput,
  faces: FacesInput,
};

class ContentService extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: [],
    };
    this.addForm = this.addForm.bind(this);
  }

  addForm(type) {
    this.setState({
      fields: this.state.fields.concat({ type }),
    });
  }

  setFieldValue(index, value) {
    this.setState({

    });
  }

  render() {
    return (
      <div>
        { this.state.fields.map(({ type }, index) => {
          const Item = mapFormsTypes[type];
          return <Item name={`blocks[${index}]`} key={index}></Item>;
        })}
        <AddButton
          onClick={() => this.addForm('quote')}
        >Добавить</AddButton>
        <AddButton
          onClick={() => this.addForm('faces')}
        >Добавить2</AddButton>
      </div>
    );
  }
}

export default ContentService;


export { default as Quote } from './QuoteInput';
