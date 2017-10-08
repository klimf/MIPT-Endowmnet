import React from 'react';
import {
  List,
  Create,
  Edit,
  TextInput,
  SimpleForm,
  DateField,
  ImageInput,
  ImageField, Responsive, EditButton,
} from 'admin-on-rest';

import { FlatButton, ListItem } from 'material-ui';
import PageIcon from 'material-ui/svg-icons/action/description';
import EditIcon from 'material-ui/svg-icons/content/create';
import AddIcon from 'material-ui/svg-icons/content/add-box';
import RichTextInput from 'aor-rich-text-input';
import { required } from '../validation';
// import Editor from '../../Editor';
// import { formatMoney, parseMoney } from '../../../../utils/helpers';


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

// eslint-disable-next-line react/prop-types,no-unused-vars
const NestedList = ({ ids, data, basePath }) =>
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
