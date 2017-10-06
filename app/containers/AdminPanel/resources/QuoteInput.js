import React from 'react';
import { Field } from 'redux-form';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import { RaisedButton } from 'material-ui';
import { palette } from 'utils/constants';
import {
  LongTextInput,
  TextInput,
} from 'admin-on-rest';
import {
  Wrapper,
  Quote,
  ImgWrapper,
  Image,
  TextBlock,
  Info,
  Decoration,
} from '../../../components/Quotes/Item';
import { required } from './validation';

import FlexBox from '../../../components/FlexBox';

const HoverableImageWrapper = styled(Dropzone)`
  position: relative;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    &:after {
      opacity: 1;
    }
  }
  &:after {
    transition: 0.3s ease;
    content: 'Загрузить фото';
    position: absolute;
    border-radius: 50%;
    top: 0;
    padding-top: 45%;
    text-align: center;
    width: 100%;
    height: 100%;
    opacity: 0;
    color: ${palette.white};
    background: rgba(0, 0, 0, .6);
  }
`;

const ImageDrop = (field) => (
  <HoverableImageWrapper
    onDrop={(files) => {
      field.input.onChange({
        preview: files[0].preview,
        file: files[0] });
    }
    }
  >
    <ImgWrapper>
      <Image src={field.input.value && field.input.value.preview} />
    </ImgWrapper>
  </HoverableImageWrapper>
  );

const DeleteButton = styled(RaisedButton) `
  right: 0;
`;

const PeopleInput = (man, index, fields) => (
  <Wrapper key={index} isLeft horisontal="space-between">
    <Field validate={[required]} name={`${man}.picture`} component={ImageDrop} />
    <TextBlock>
      <Quote>
        <Field validate={[required]} name={`${man}.quote`} component={LongTextInput} label="Цитата" />
      </Quote>
      <FlexBox horisontal="space-between" vertical="center">
        <Info>
          <Field validate={[required]} name={`${man}.status`} component={TextInput} label="Статус" />
          <b>
            <Field validate={[required]} name={`${man}.name`} component={TextInput} label="Имя" />
          </b>
        </Info>
      </FlexBox>
      <Decoration isLeft />
    </TextBlock>
    <DeleteButton onClick={() => fields.remove(index)}>Удалить</DeleteButton>
  </Wrapper>
);


export default PeopleInput;
