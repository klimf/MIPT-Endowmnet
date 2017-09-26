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
import { required, onlyDigits, onlyLatin, currency } from '../validation';
import PeopleSection from './PeopleSection';
import RichTextInput from 'aor-rich-text-input';
// import Editor from '../../Editor';
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
    <TabbedForm>
      <FormTab label="Общая информация">
        <TextInput label={'Название'} validate={[required]} source="name" />
        <TextInput label={'Короткое описание'} validate={[required]} source="description" />
        <TextInput label={'Название для ссылки'} validate={[required, onlyLatin]} source="fullPageUri" />
        <TextInput label={'Собрано'} validate={[required, currency]} source="given" />
        <RichTextInput source="content" validate={[required]} label="Полное описание" toolbar={[[{ header: [1, 2, 3, false] }], ['bold', 'italic', 'underline', 'strike'], [{ list: 'ordered' }, { list: 'bullet' }], [{ direction: 'rtl' }], [{ align: [] }], ['link', 'image']]} />
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
  <Create title={'Создание капитала'} {...props}>
    <TabbedForm>
      <FormTab label="Общая информация">
        <TextInput label={'Название'} validate={[required]} source="name" />
        <TextInput label={'Короткое описание'} validate={[required]} source="description" />
        <TextInput label={'Название для ссылки'} validate={[required, onlyLatin]} source="linkName" />
        <TextInput label={'Собрано'} validate={[required, currency]} source="purpose" />
        <RichTextInput source="content" validate={[required]} label="Полное описание" toolbar={[[{ header: [1, 2, 3, false] }], ['bold', 'italic', 'underline', 'strike'], [{ list: 'ordered' }, { list: 'bullet' }], [{ direction: 'rtl' }], [{ align: [] }], ['link', 'image']]} />
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
