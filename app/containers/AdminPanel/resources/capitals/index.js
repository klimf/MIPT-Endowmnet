import React from 'react';
import {
  List,
  Datagrid,
  Create,
  Edit,
  TextField,
  EditButton,
  TextInput,
  NumberField,
  TabbedForm,
  FormTab,
  ImageInput,
  ImageField,
} from 'admin-on-rest';
import { required, currency } from '../validation';
import PeopleSection from './PeopleSection';
import { StaticImage } from '../customFields';
import ContentService from '../../Editor/componentsService';

export const CapitalsList = (props) => (
  <List title={'Капиталы'} {...props}>
    <Datagrid>
      <StaticImage source="image" label="Изображение" />
      <TextField label={'Название'} source="name" />
      <NumberField
        label="Собрано"
        source="given" options={{ style: 'currency', currency: 'RUB' }}
      />
      <TextField label={'Короткое описание'} source="description" />
      <EditButton label={'Редактировать'} basePath="/capitals" />
    </Datagrid>
  </List>
);

export const CapitalsEdit = (props) => (
  <Edit title={'Редактирование капитала'} {...props}>
    <TabbedForm>
      <FormTab label="Общая информация">
        <ImageInput source="picture" label="Фотография" accept="image/png,image/jpg,image/jpeg">
          <ImageField source="image.small"></ImageField>
        </ImageInput>
        <StaticImage source="image" />
        <TextInput label={'Название'} validate={[required]} source="name" />
        <TextInput label={'Короткое описание'} validate={[required]} source="description" />
        <TextInput label={'Собрано'} validate={[required, currency]} source="given" />
        <ContentService source={'content'}></ContentService>
      </FormTab>
      <FormTab label="Основатели">
        <PeopleSection name={'founders'}></PeopleSection>
      </FormTab>
      <FormTab label="Получатели">
        <PeopleSection name={'receivers'}></PeopleSection>
      </FormTab>
    </TabbedForm>
  </Edit>
);

export const CapitalsCreate = (props) => (
  <Create title={'Создание капитала'} {...props} redirect={'capitals'} >
    <TabbedForm>
      <FormTab label="Общая информация">
        <ImageInput source="picture" label="Фотография" accept="image/png,image/jpg,image/jpeg">
          <ImageField source="image.small" />
        </ImageInput>
        <StaticImage source="image" />
        <TextInput label={'Название'} validate={[required]} source="name" />
        <TextInput label={'Короткое описание'} validate={[required]} source="description" />
        <TextInput label={'Собрано'} validate={[required, currency]} source="given" />
        <ContentService source={'content'}></ContentService>
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
