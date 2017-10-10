
import React, { Component, PropTypes } from 'react';
import { RaisedButton } from 'material-ui';
import styled from 'styled-components';
import { FieldArray } from 'redux-form';
import PeopleInput from './QuoteInput';
import FacesInput from './PeopleRowInput';
const AddButton = styled(RaisedButton)`
  margin: 0 50%;
`;


const mapFormsTypes = {
  quote: PeopleInput,
  faces: FacesInput,
};


// function renderFields({ name, fields }) {
//   { fields.map((member, index, fields) => {
//     fields.insert(index, { type, data: {} });
//     const InputComponent = mapFormsTypes[type];
//     if (!InputComponent) {
//       throw new Error('unsupported component type');
//     }
//     return <InputComponent name={`${fields.name}.data`} />;
//   }); }
// }

function renderFormItem(name, fields) {
  return fields.map((member, index, fieldsRef) => {
    const type = fieldsRef.get([index]).type;
    const InputComponent = mapFormsTypes[type];
    if (!InputComponent) {
      throw new Error('unsupported component type');
    }
    return <InputComponent key={index} name={`${member}.data`} />;
  });
}


function renderFields({ name, fields, types, addForm }) { //eslint-disable-line
  return (
    <div>
      {renderFormItem(name, fields, types)}
      <AddButton
        onClick={() => {
          fields.push({ type: 'quote' });
        }}
      >Добавить</AddButton>
    </div>
  );
}

class ContentService extends Component {

  constructor(props) {
    super(props);
    this.state = {
      types: [],
    };
    this.addForm = this.addForm.bind(this);
  }


  addForm(type) {//eslint-disable-line
    this.setState({
      types: this.state.types.concat(type),
    });
  }


  render() {
    return (
      <div>
        {/* { this.state.fields.map(({ type }, index) => {
          const Item = mapFormsTypes[type];
          return <Item name={`${this.props.name}[${index}].data`} key={index}></Item>;
        })} */}
        <FieldArray name={'blocks'} component={renderFields} props={{ types: this.state.types, addForm: this.addForm }}></FieldArray>
        <AddButton
          onClick={() => this.addForm('faces')}
        >Добавить2</AddButton>
      </div>
    );
  }
}

ContentService.propTypes = {
  name: PropTypes.string,
};

export default ContentService;


export { default as Quote } from './QuoteInput';
