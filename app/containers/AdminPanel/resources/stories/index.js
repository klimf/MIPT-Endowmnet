import React from 'react';
import {
  List,
  Datagrid,
  Create,
  Edit,
  TextField,
  SimpleForm,
  EditButton,
} from 'admin-on-rest';
import QuoteInput from '../../Editor/componentsService/forms/QuoteInput';
import ContentService from '../../Editor/componentsService';

export const StoriesList = (props) => (
  <List title={'Истории'} {...props} pagination={null}>
    <Datagrid>
      <TextField label={'Имя'} source="owner.name" />
      <EditButton label={'Редактировать'} basePath="/capitals" />
    </Datagrid>
  </List>
);

export const StoriesEdit = (props) => (
  <Edit title={'Редактированиие истории'} {...props}>
    <SimpleForm>
      <QuoteInput name={'owner'} />
      <ContentService source={'content'}></ContentService>
    </SimpleForm>
  </Edit>
);

export const StoriesCreate = (props) => (
  <Create title={'Создание новости'} {...props}>
    <SimpleForm>
      <QuoteInput name={'owner'} />
      <ContentService source={'content'}></ContentService>
    </SimpleForm>
  </Create>
);
