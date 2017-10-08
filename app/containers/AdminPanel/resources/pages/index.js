import React from 'react';
import {
  List,
  Create,
  Edit,
  SimpleForm,
  TextInput,
} from 'admin-on-rest';
import { FlatButton, ListItem } from 'material-ui';
import PageIcon from 'material-ui/svg-icons/action/description';
import EditIcon from 'material-ui/svg-icons/image/edit';
import { required, onlyLatin } from '../validation';

import Editor from '../../Editor';

function renderTree(nodes) {
  return nodes.map((item, index) =>
    <ListItem
      key={index}
      leftIcon={<PageIcon />}
      rightIconButton={<FlatButton
        style={{ margin: 4 }}
        icon={<EditIcon />} label="Редактиовать"
      />}
      primaryTogglesNestedList primaryText={item.pageName}
      nestedItems={item.nodes.length > 0 ? renderTree(item.nodes) : []}
    />
    );
}

const NestedList = ({ ids, data, basePath }) => // eslint-disable-line
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
      <TextInput label={'Название'} validate={[required]} source="name" />
      <TextInput label={'Описание'} validate={[required]} source="description" />
      <TextInput label={'ссылка'} validate={[required, onlyLatin]} source="pageName" />
      <Editor source={'content'} validate={[required]}></Editor>
    </SimpleForm>
  </Edit>
);

export const PagesCreate = (props) => (
  <Create title={'Создание страницы'} {...props}>
    <SimpleForm>
      <TextInput label={'Название'} validate={[required]} source="name" />
      <TextInput label={'Описание'} validate={[required]} source="description" />
      <TextInput label={'ссылка'} validate={[required, onlyLatin]} source="pageName" />
      <Editor source={'content'} validate={[required]}></Editor>
    </SimpleForm>
  </Create>
);

