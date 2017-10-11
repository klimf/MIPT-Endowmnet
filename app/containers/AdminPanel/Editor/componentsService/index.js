
import React, { Component, PropTypes } from 'react';
import { RaisedButton } from 'material-ui';
import styled from 'styled-components';
import { FieldArray, arrayPush } from 'redux-form'; // eslint-disable-line
import { connect } from 'react-redux';
import getFormByName, { config } from './formsConfig';
import ComponentFormModal from './ComponentFormModal';

const AddButton = styled(RaisedButton)`
  margin: 0 50%;
`;

function renderFormItem(name, fields) {
  return fields.map((member, index, fieldsRef) => {
    const type = fieldsRef.get([index]).type;
    const InputComponent = getFormByName(type);
    if (!InputComponent) {
      throw new Error('unsupported component type');
    }
    return <InputComponent key={index} name={`${member}.data`} />;
  });
}

function renderFieldsItems({ name, fields, types, addForm }) { //eslint-disable-line
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
      showPopup: false,
    };
    this.addForm = this.addForm.bind(this);
  }

  componentDidMount = () => {
    // this.props.dispatch(arrayPush('record-form', `${this.props.source}`, { type: 'quote' }));
  }


  addForm(type) {//eslint-disable-line
    this.setState({
      types: this.state.types.concat(type),
    });
  }

  render() {
    return (
      <div>
        <FieldArray name={`${this.props.source}`} component={renderFieldsItems} props={{ types: this.state.types, addForm: this.addForm }}></FieldArray>
        <AddButton
          onClick={() => this.addForm('faces')}
        >Добавить2</AddButton>
        <ComponentFormModal show={this.state.showPopup} forms={config} ></ComponentFormModal>
      </div>
    );
  }
}

ContentService.propTypes = {
  source: PropTypes.string,
  dispatch: PropTypes.func, // eslint-disable-line
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});


export default connect(null, mapDispatchToProps)(ContentService);

