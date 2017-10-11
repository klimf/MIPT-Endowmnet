import React from 'react';
import {
  List,
  Datagrid,
  Create,
  Edit,
  TextField,
  EditButton,
  TextInput,
  SimpleForm,
  DateInput,
  ImageInput,
  ImageField,
} from 'admin-on-rest';
import { required } from '../validation';
import { StaticImage } from '../customFields';
import ContentService from '../../Editor/componentsService';

export const NewsList = (props) => (
  <List title={'Новости'} {...props}>
    <Datagrid>
      <StaticImage source="image" label="Изображение" />
      <TextField label={'Название'} source="name" />
      <TextField label={'Короткое превью'} source="description" />
      <EditButton label={'Редактировать'} basePath="/news" />
    </Datagrid>
  </List>
);

export const NewsEdit = (props) => (
  <Edit title={'Редактирование новости'} {...props}>
    <SimpleForm>
      <ImageInput source="picture" label="Фотография" accept="image/png,image/jpg,image/jpeg">
        <ImageField source="image.small" />
      </ImageInput>
      <StaticImage source="image" />
      <TextInput label={'Название'} validate={[required]} source="name" />
      <TextInput label={'Короткое первью'} validate={[required]} source="description" />
      <DateInput source="date" label="Дата" />
      <ContentService source={'content'}></ContentService>
    </SimpleForm>
  </Edit>
);

export const NewsCreate = (props) => (
  <Create title={'Создание Новости'} {...props}>
    <SimpleForm>
      <ImageInput source="picture" label="Фотография" accept="image/png,image/jpg,image/jpeg">
        <ImageField source="image.small" />
      </ImageInput>
      <StaticImage source="image" />
      <TextInput label={'Название'} validate={[required]} source="name" />
      <TextInput label={'Короткое первью'} validate={[required]} source="description" />
      <DateInput source="date" label="Дата" />
      <ContentService source={'content'}></ContentService>
    </SimpleForm>
  </Create>
);
