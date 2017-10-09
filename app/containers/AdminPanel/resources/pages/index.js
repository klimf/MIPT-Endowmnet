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
import Editor from '../../Editor';


function renderTree(ids, nodes, lvl) {
  const newLvl = lvl;
  return nodes.map((item, index) => {
    ids.push(item.pageName);
    // eslint-disable-next-line no-param-reassign
    item.ids = item.pageName;
    return (<ListItem
      key={index}
      id={Number(`${newLvl}${index}`)}
      leftIcon={<PageIcon />}
      rightIconButton={(
        <Responsive
          small={
            <div>
              <EditButton record={item} basePath="/pages" style={{ margin: 4 }} icon={<EditIcon />} />
              <FlatButton style={{ margin: 4 }} icon={<AddIcon />} />
            </div>
            }
          medium={
            <div>
              <EditButton record={item} basePath="/pages" style={{ margin: 4 }} icon={<EditIcon />} label="Редактиовать" />
              <FlatButton style={{ margin: 4 }} icon={<AddIcon />} label="Добавить подстраницу" />
            </div>
            }
        />
        )}
      primaryTogglesNestedList
      initiallyOpen
      primaryText={`#${newLvl}${index} - ${item.pageName}`}
      nestedItems={item.nodes.length > 0 ? renderTree(ids, item.nodes, `${newLvl}${index}`) : []}
    />);
  }
  );
}

const NestedList = ({ ids, data, basePath }) => // eslint-disable-line
  <div>
    {renderTree(ids, data[1].nodes, 1)}
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

