import React, { PropTypes } from 'react';
import {
  List,
  Create,
  Edit,
  SimpleForm,
  Responsive,
  EditButton,
  TextInput,
  TextField,
} from 'admin-on-rest';
import { FlatButton, ListItem } from 'material-ui';
import PageIcon from 'material-ui/svg-icons/action/description';
import EditIcon from 'material-ui/svg-icons/content/create';
import AddIcon from 'material-ui/svg-icons/content/add-box';
import { required, onlyUrl, onlyOneNode } from '../validation';
import ContentService from '../../Editor/componentsService';

function getId(name, path) {
  return `${path}${(path === '') ? '' : '/'}${name}`;
}

function renderTree(nodes, path, history) {
  return nodes.map((item, index) => (<ListItem
    key={index}
    leftIcon={<PageIcon />}
    rightIconButton={(
      <Responsive
        small={
          <div>
            <EditButton record={Object.assign({}, item, { id: getId(item.pageName, path) })} basePath="/pages" style={{ margin: 4 }} icon={<EditIcon />} />
            <FlatButton onClick={() => history.push(`pages/create/${getId(item.pageName, path)}`)} record={Object.assign({}, item, { id: getId(item.pageName, path) })} style={{ margin: 4 }} icon={<AddIcon />} />
          </div>
            }
        medium={
          <div>
            <EditButton record={Object.assign({}, item, { id: item.id })} basePath="/pages" style={{ margin: 4 }} icon={<EditIcon />} label="Редактиовать" />
            <FlatButton onClick={() => history.push(`pages/create/${getId(item.pageName, path)}`)} record={Object.assign({}, item, { id: getId(item.pageName, path) })} style={{ margin: 4 }} icon={<AddIcon />} label="Добавить подстраницу" />
          </div>
            }
      />
        )}
    primaryTogglesNestedList
    initiallyOpen
    primaryText={`${item.pageName}`}
    nestedItems={item.nodes.length > 0 ? renderTree(item.nodes, getId(item.pageName, path), history) : []}
  />)
  );
}

const NestedList = ({ ids, data, basePath, history }) => // eslint-disable-line
  <div>
    {renderTree(data[1].nodes, '', history)}
  </div>;

NestedList.defaultProps = {
  data: {},
  ids: [],
};

export const PagesList = (props) => (
  <List title="Страницы" pagination={null} {...props}>
    <NestedList history={props.history} />
  </List>
  );

PagesList.propTypes = {
  history: PropTypes.any,
}
  ;


export const PagesEdit = (props) => (
  <Edit title={'Редактирование страницы'} {...props}>
    <SimpleForm>
      <TextInput label={'Название'} validate={[required]} source="name" />
      <TextInput label={'Описание'} validate={[required]} source="description" />
      <TextField label={'ссылка'} source="url" />
      <ContentService source={'content'}></ContentService>
    </SimpleForm>
  </Edit>
);

export const PagesCreate = (props) => (
  <Create title={`Создание подстраницы для ${props.match.params['0'] || ''}/`} {...props}>
    <SimpleForm>
      <TextInput label={'Название'} validate={[required]} source="name" />
      <TextInput label={'Описание'} validate={[required]} source="description" />
      <TextInput
        defaultValue={`${props.match.params['0'] || ''}/`}
        format={(val) => (val && val !== `${props.match.params['0'] || ''}/`) ? val : `${props.match.params['0'] || ''}/`}
        label={'ссылка'} validate={[required, onlyUrl, onlyOneNode(`${props.match.params['0']}/`)]} source="url"
      />
      <ContentService source={'content'}></ContentService>
    </SimpleForm>
  </Create>
  );

PagesCreate.propTypes = {
  match: PropTypes.any,
}
;
