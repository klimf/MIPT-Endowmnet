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
import RichTextInput from 'aor-rich-text-input';
import { required } from '../validation';
import { StaticImage } from '../customFields';
// import Editor from '../../Editor';

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
      <RichTextInput source="content" validate={[required]} label="Полное описание" toolbar={[[{ header: [1, 2, 3, false] }], ['bold', 'italic', 'underline', 'strike'], [{ list: 'ordered' }, { list: 'bullet' }], [{ direction: 'rtl' }], [{ align: [] }], ['link', 'image']]} />
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
      <RichTextInput source="content" validate={[required]} label="Полное описание" toolbar={[[{ header: [1, 2, 3, false] }], ['bold', 'italic', 'underline', 'strike'], [{ list: 'ordered' }, { list: 'bullet' }], [{ direction: 'rtl' }], [{ align: [] }], ['link', 'image']]} />
    </SimpleForm>
  </Create>
);
