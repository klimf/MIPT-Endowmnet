import { RaisedButton } from 'material-ui';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import { palette } from 'utils/constants';

export const AddButton = styled(RaisedButton)`
margin: 0 50%;
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
}
`;
