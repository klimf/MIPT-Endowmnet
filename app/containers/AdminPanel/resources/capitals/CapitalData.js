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
  LongTextInput,
  DateInput,
  NumberField,
} from 'admin-on-rest';

export const CapitalList = (props) => (
  <List title={'Капиталы'} {...props}>
    <Datagrid>
      <TextField label={'Название'} source="name" />
      <NumberField
        label="Цель"
        source="purpose" options={{ style: 'currency', currency: 'RUB' }}
      />
      <EditButton label={'Редактировать'} basePath="/posts" />
    </Datagrid>
  </List>
);

export const CapitalEdit = (props) => (
  <Edit title={'Редактирование капитала'} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <TextInput source="teaser" options={{ multiLine: true }} />
      <LongTextInput source="body" />
      <DateInput label="Publication date" source="published_at" />
      <TextInput source="average_note" />
      <DisabledInput label="Nb views" source="views" />
    </SimpleForm>
  </Edit>
);

export const CapitalCreate = (props) => (
  <Create title={'Создание капитала'} {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="teaser" options={{ multiLine: true }} />
      <LongTextInput source="body" />
      <TextInput label="Publication date" source="published_at" />
      <TextInput source="average_note" />
    </SimpleForm>
  </Create>
);
