import React from 'react';
import { Field } from 'redux-form';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import { RaisedButton } from 'material-ui';
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
} from '../../../../components/Quotes/Item';
import FlexBox from '../../../../components/FlexBox';


const ImageDrop = (field) => {
  console.log(field);
  return (
    <Dropzone onDrop={(files) => field.input.onChange(files[0].preview)} >
      <ImgWrapper>
        <HoverableImageWrapper style={{ backgroundImage: `url(${field.input.value})` }} >
        </HoverableImageWrapper>
      </ImgWrapper>
    </Dropzone>
  );
};

const DeleteButton = styled(RaisedButton) `
  right: 0;
`;

const HoverableImageWrapper = styled(Image)`
  transition: 0.3s ease;
  &:hover {
    background: rgba(0, 0, 0, .6);
    cursor: pointer;
  }
`;

const PeopleInput = (man, index, fields) => (
  <Wrapper key={index} isLeft horisontal="space-between">
    <Field name={`${man}.picture`} component={ImageDrop} />
    <TextBlock>
      <Quote>
        <Field name={`${man}.quote`} component={LongTextInput} label="Цитата" />
      </Quote>
      <FlexBox horisontal="space-between" vertical="center">
        <Info>
          <Field name={`${man}.status`} component={TextInput} label="Статус" />
          <b>
            <Field name={`${man}.name`} component={TextInput} label="Имя" />
          </b>
        </Info>
      </FlexBox>
      <Decoration isLeft />
    </TextBlock>
    <DeleteButton onClick={() => fields.remove(index)}>Удалить</DeleteButton>
  </Wrapper>
);


export default PeopleInput;
