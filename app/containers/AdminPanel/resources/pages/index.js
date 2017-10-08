import React from 'react';
import {
  List,
  Create,
  Edit,
  TextInput,
  SimpleForm,
  DateField,
  ImageInput,
  ImageField,
} from 'admin-on-rest';

import { FlatButton, ListItem } from 'material-ui';
import PageIcon from 'material-ui/svg-icons/action/description';
import EditIcon from 'material-ui/svg-icons/image/edit';
import RichTextInput from 'aor-rich-text-input';
import { required } from '../validation';
// import Editor from '../../Editor';
// import { formatMoney, parseMoney } from '../../../../utils/helpers';

function renderTree(nodes) {
  return nodes.map((item, index) =>
    <ListItem
      key={index} leftIcon={<PageIcon />} rightIconButton={<FlatButton style={{ margin: 4 }} icon={<EditIcon />} label="Редактиовать" />} primaryTogglesNestedList primaryText={item.pageName} nestedItems={item.nodes.length > 0 ? renderTree(item.nodes) : []}
    />
  );
}

// eslint-disable-next-line react/prop-types,no-unused-vars
const NestedList = ({ ids, data, basePath }) =>
  <div>
    {renderTree(data[1].nodes)}
  </div>;

NestedList.defaultProps = {
  data: {},
  ids: [],
};

export const PagesList = (props) => (
  <List title="Страницы" {...props}>
    <NestedList />
  </List>
);

export const PagesEdit = (props) => (
  <Edit title={'Редактирование страницы'} {...props}>
    <SimpleForm>
      <ImageInput source="picture" label="Фотография" accept="image/png,image/jpg,image/jpeg">
        <ImageField source="image.small" />
      </ImageInput>
      <TextInput label={'Название'} validate={[required]} source="name" />
      <TextInput label={'Короткое первью'} validate={[required]} source="description" />
      <DateField label={'Дата'} validate={[]} source="date" />
      <RichTextInput
        source="content" validate={[required]} label="Полное описание"
        toolbar={[[{ header: [1, 2, 3, false] }], ['bold', 'italic', 'underline', 'strike'], [{ list: 'ordered' }, { list: 'bullet' }], [{ direction: 'rtl' }], [{ align: [] }], ['link', 'image']]}
      />
    </SimpleForm>
  </Edit>
);

export const PagesCreate = (props) => (
  <Create title={'Создание страницы'} {...props}>
    <SimpleForm>
      <ImageInput source="picture" label="Фотография" accept="image/png,image/jpg,image/jpeg">
        <ImageField source="image.small" />
      </ImageInput>
      <TextInput label={'Название'} validate={[required]} source="name" />
      <TextInput label={'Короткое первью'} validate={[required]} source="description" />
      <DateField label={'Дата'} validate={[]} source="date" />
      <RichTextInput
        source="content" validate={[required]} label="Полное описание"
        toolbar={[[{ header: [1, 2, 3, false] }], ['bold', 'italic', 'underline', 'strike'], [{ list: 'ordered' }, { list: 'bullet' }], [{ direction: 'rtl' }], [{ align: [] }], ['link', 'image']]}
      />
    </SimpleForm>
  </Create>
);
