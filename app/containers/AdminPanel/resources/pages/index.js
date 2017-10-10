import React from 'react';
import {
  List,
  Create,
  Edit,
  SimpleForm,
  Responsive,
  EditButton,
  TextInput,
} from 'admin-on-rest';
import { FlatButton, ListItem } from 'material-ui';
import PageIcon from 'material-ui/svg-icons/action/description';
import EditIcon from 'material-ui/svg-icons/content/create';
import AddIcon from 'material-ui/svg-icons/content/add-box';
import { required, onlyLatin } from '../validation';

function renderTree(nodes, path) {
  function getId(name) {
    return `${path}${(path === '') ? '' : '/'}${name}`;
  }
  return nodes.map((item, index) => (<ListItem
    key={index}
    leftIcon={<PageIcon />}
    rightIconButton={(
      <Responsive
        small={
          <div>
            <EditButton record={Object.assign({}, item, { id: getId(item.pageName) })} basePath="/pages" style={{ margin: 4 }} icon={<EditIcon />} />
            <FlatButton record={Object.assign({}, item, { id: getId(item.pageName) })} style={{ margin: 4 }} icon={<AddIcon />} />
          </div>
            }
        medium={
          <div>
            <EditButton record={Object.assign({}, item, { id: getId(item.pageName) })} basePath="/pages" style={{ margin: 4 }} icon={<EditIcon />} label="Редактиовать" />
            <FlatButton record={Object.assign({}, item, { id: getId(item.pageName) })} style={{ margin: 4 }} icon={<AddIcon />} label="Добавить подстраницу" />
          </div>
            }
      />
        )}
    primaryTogglesNestedList
    initiallyOpen
    primaryText={`${item.pageName}`}
    nestedItems={item.nodes.length > 0 ? renderTree(item.nodes, getId(item.pageName)) : []}
  />)
  );
}

const NestedList = ({ ids, data, basePath }) => // eslint-disable-line
  <div>
    {renderTree(data[1].nodes, '')}
  </div>;

NestedList.defaultProps = {
  data: {},
  ids: [],
};

export const PagesList = (props) => (
  <List title="Страницы" pagination={<div />} {...props}>
    <NestedList />
  </List>
  );

export const PagesEdit = (props) => (
  <Edit title={'Редактирование страницы'} {...props}>
    <SimpleForm>
      <TextInput label={'Название'} validate={[required]} source="name" />
      <TextInput label={'Описание'} validate={[required]} source="description" />
      <TextInput label={'ссылка'} validate={[required, onlyLatin]} source="url" />
    </SimpleForm>
  </Edit>
);

export const PagesCreate = (props) => (
  <Create title={'Создание страницы'} {...props}>
    <SimpleForm>
      <TextInput label={'Название'} validate={[required]} source="name" />
      <TextInput label={'Описание'} validate={[required]} source="description" />
      <TextInput label={'ссылка'} validate={[required, onlyLatin]} source="url" />
    </SimpleForm>
  </Create>
);

