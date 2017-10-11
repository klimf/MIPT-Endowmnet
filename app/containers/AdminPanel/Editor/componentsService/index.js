
import React, { Component, PropTypes } from 'react';
import { FieldArray, arrayPush } from 'redux-form'; // eslint-disable-line
import { connect } from 'react-redux';
import getFormByName, { config } from './formsConfig';
import ComponentFormModal from './ComponentFormModal';
import { AddButton, DeleteButton, FormWrap } from './components';


function renderFormItem(name, fields) {
  return fields.map((member, index, fieldsRef) => {
    const type = fieldsRef.get([index]).type;
    const InputComponent = getFormByName(type);
    if (!InputComponent) {
      throw new Error('unsupported component type');
    }
    return (
      <FormWrap>
        <InputComponent key={index} name={`${member}.data`} />
        <DeleteButton onClick={() => fieldsRef.remove(index)}>удалить</DeleteButton>
      </FormWrap>
    );
  });
}

function renderFieldsItems({ name, fields, types, addForm }) { //eslint-disable-line
  return (
    <div>
      {renderFormItem(name, fields, types)}
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
    this.toggleModal = this.toggleModal.bind(this);
  }


  addForm(name) {//eslint-disable-line
    this.props.dispatch(arrayPush('record-form', this.props.source, { type: name }));
    this.setState({ showPopup: false });
  }

  toggleModal() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  render() {
    return (
      <div>
        <FieldArray name={`${this.props.source}`} component={renderFieldsItems} props={{ types: this.state.types, addForm: this.addForm }}></FieldArray>
        <AddButton
          onClick={this.toggleModal}
        >Добавить2</AddButton>
        <ComponentFormModal
          onCancel={this.toggleModal}
          show={this.state.showPopup}
          forms={config}
          onComponentSelect={this.addForm}
        />
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

