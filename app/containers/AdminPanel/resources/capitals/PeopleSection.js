import React from 'react';
import { RaisedButton } from 'material-ui';
import { FieldArray } from 'redux-form';
import styled from 'styled-components';
import PeopleInput from './PeopleInput';


const AddButton = styled(RaisedButton)`
  margin: 0 50%;
`;

const renderPeopleFields = ({ fields }) => (
  <div>
    { fields.map(PeopleInput) }
    <AddButton onClick={() => fields.push({})}>Добавить</AddButton>
  </div>
  );

renderPeopleFields.propTypes = {
  fields: React.PropTypes.object,
};

const PeopleSection = ({ name }) => (
  <div>
    <FieldArray name={name} component={renderPeopleFields}></FieldArray>
  </div>
);

PeopleSection.propTypes = {
  name: React.PropTypes.string.isRequired,
};


export default PeopleSection;
