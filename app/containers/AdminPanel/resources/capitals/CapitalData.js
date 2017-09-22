import React from 'react';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  TextField,
  EditButton,
  DisabledInput,
  TextInput,
  NumberField,
  TabbedForm,
  FormTab,
} from 'admin-on-rest';
import { required, onlyDigits, onlyLatin } from '../validation';
import PeopleSection from './PeopleSection';
import Editor from '../../Editor';
// import { formatMoney, parseMoney } from '../../../../utils/helpers';

export const CapitalsList = (props) => (
  <List title={'Капиталы'} {...props}>
    <Datagrid>
      <TextField label={'Название'} source="name" />
      <NumberField
        label="Цель"
        source="purpose" options={{ style: 'currency', currency: 'RUB' }}
      />
      <EditButton label={'Редактировать'} basePath="/capitals" />
    </Datagrid>
  </List>
);

export const CapitalsEdit = (props) => (
  <Edit title={'Редактирование капитала'} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput label={'Название'} validate={[required]} source="name" />
      <TextInput label={'Название для ссылки'} validate={[required, onlyLatin]} source="linkName" />
      <TextInput label={'Собрано'} validate={[required, onlyDigits]} source="purpose" />
    </SimpleForm>
  </Edit>
);

export const CapitalsCreate = (props) => (
  <Create title={'Создание капитала'} {...props}>
    <TabbedForm>
      <FormTab label="Общая информация">
        <TextInput label={'Название'} validate={[required]} source="name" />
        <TextInput label={'Название для ссылки'} validate={[required, onlyLatin]} source="linkName" />
        <TextInput label={'Собрано'} validate={[required, onlyDigits]} source="purpose" />
        <Editor></Editor>
      </FormTab>
      <FormTab label="Основатели">
        <PeopleSection name={'founders'}></PeopleSection>
      </FormTab>
      <FormTab label="Получатели">
        <PeopleSection name={'receivers'}></PeopleSection>
      </FormTab>
    </TabbedForm>
  </Create>
);
