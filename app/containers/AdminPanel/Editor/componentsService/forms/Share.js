import React from 'react';  //eslint-disable-line
import { Field } from 'redux-form';
import {
  TextInput,
} from 'admin-on-rest';
import { required } from '../../../resources/validation';


export const Input = ({ name, index, fields }) => ( //eslint-disable-line
  <div>
    <Field validate={[required]} name={`${name}.title`} label={'Заголовок для публикации в соц сетях'} component={(props) => (<TextInput options={{ fullWidth: true }} {...props} />)} />
    <Field validate={[required]} name={`${name}.description`} label={'Описание для публикации в соц сетях'} component={(props) => (<TextInput options={{ fullWidth: true }} {...props} />)} />
  </div>
);


export default Input;
