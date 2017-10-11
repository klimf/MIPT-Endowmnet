import React from 'react';
import { Field } from 'redux-form';
import {
  LongTextInput,
  TextInput,
} from 'admin-on-rest';
import {
  Quote,
  Info,
  Decoration,
} from '../../../../../components/Quotes/Item';
import { Image, Wrapper, ContentBlock, ImgWrapper } from '../../../../../components/ImgContent';
import { required } from '../../../resources/validation';

import FlexBox from '../../../../../components/FlexBox';
import { ImageDrop } from '../components';


const imageDropComponent = ({ field }) => { // eslint-disable-line
  const image = field.input.value ? field.input.value.small || field.input.value.preview : null;
  return (
    <ImgWrapper imgWidth={200}>
      <Image circle shadow src={image} />
    </ImgWrapper>
  );
};


export const PeopleInput = ({ name, index, fields }) => ( //eslint-disable-line
  <Wrapper margin="48px 0" horisontal="space-between" >
    <Field name={`${name}.type`} value={'quote'} component={'span'} />
    <Field validate={[required]} name={`${name}.image`} component={ImageDrop(imageDropComponent)} />
    <ContentBlock padding="24px" innerPadding={48} vertPadding={48} imgWidth={200} block>
      <Quote>
        <Field validate={[required]} name={`${name}.quote`} component={LongTextInput} label="Цитата" />
      </Quote>
      <FlexBox horisontal="space-between" vertical="center">
        <Info>
          <Field validate={[required]} name={`${name}.status`} component={TextInput} label="Статус" />
          <b>
            <Field validate={[required]} name={`${name}.name`} component={TextInput} label="Имя" />
          </b>
        </Info>
      </FlexBox>
      <Decoration isLeft />
    </ContentBlock>
    {/* <DeleteButton onClick={() => fields.remove(index)}>Удалить</DeleteButton> */}
  </Wrapper>
);


export default PeopleInput;
