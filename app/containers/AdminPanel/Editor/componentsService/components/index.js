import React from 'react';
import { RaisedButton } from 'material-ui';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import { palette } from 'utils/constants';
import restClient, { setAttachment } from '../../../restClient';
import { UPLOAD } from '../../../actions';

export const AddButton = styled(RaisedButton)`
margin: 0 50%;
`;

export const DeleteButton = styled(RaisedButton)`
    position: absolute;
    right: 0;
    top: 0;
`;

export const HoverableImageWrapper = styled(Dropzone)`
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
  ${(props) => props.forFace && `
    left: 10%;
    width: 80%;
    padding-top: 35%;
  `}
}
`;

export const FormWrap = styled.div`
    position: relative;
`;


export const ImageDrop = (Component) => (field) => (
  <HoverableImageWrapper
    accept={'image/png,image/jpg,image/jpeg'}
    onDrop={(files) => {
      restClient(UPLOAD, null, setAttachment('image', files[0]))
      .then((response) => {
        field.input.onChange(response.data);
      });
    }}
  >
    <Component field={field}></Component>
  </HoverableImageWrapper>
    );
