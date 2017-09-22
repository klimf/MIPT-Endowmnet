import React from 'react';
import { Field } from 'redux-form';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
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


const ImageDrop = styled(Dropzone)`
  
`;

const HoverableImageWrapper = styled(Image)`
  transition: 0.3s ease;
  &:hover {
    background: rgba(0, 0, 0, .6);
    cursor: pointer;
  }
`;

class PeopleInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imagePreview: null,
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles) {
    this.setState({ imagePreview: acceptedFiles[0].preview });
  }

  render() {
    return (
      <Wrapper isLeft horisontal="space-between">
        <ImageDrop onDrop={this.onDrop} >
          <ImgWrapper>
            <HoverableImageWrapper style={{ backgroundImage: `url(${this.state.imagePreview})` }} >
            </HoverableImageWrapper>
          </ImgWrapper>
        </ImageDrop>
        <TextBlock>
          <Quote>
            <Field name="quote" component={LongTextInput} label="Цитата" />
          </Quote>
          <FlexBox horisontal="space-between" vertical="center">
            <Info>
              <Field name="status" component={TextInput} label="Статус" />
              <b>
                <Field name="name" component={TextInput} label="Имя" />
              </b>
            </Info>
          </FlexBox>
          <Decoration isLeft />
        </TextBlock>
      </Wrapper>
    );
  }
}


export default PeopleInput;
