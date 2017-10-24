import React from 'react';
import { Field } from 'redux-form';
import {
  LongTextInput,
  TextInput,
} from 'admin-on-rest';
import { RaisedButton } from 'material-ui';
import { Image, Wrapper, ContentBlock, ImgWrapper } from '../../../../../components/ImgContent';
import { required } from '../../../resources/validation';

import FlexBox from '../../../../../components/FlexBox';
import { ImageDrop } from '../components';
import { ImgContentCss } from '../../../../AboutPage/index';
import Space from '../../../../../components/Space/index';

// const StyledImageDrop = styled(ImageDrop).attrs({ rounded: true });

const imageDropComponent = ({ field }) => { // eslint-disable-line
  const image = field.input.value ? field.input.value.small || field.input.value.preview : null;
  return (
    <ImgWrapper imgWidth={200}>
      <Image rounded shadow src={image} />
    </ImgWrapper>
  );
};

const DirectionComponent = ({ input, onChangeDirection }) => { //eslint-disable-line
  if (input.value) {
    onChangeDirection(false);
  } else {
    onChangeDirection(true);
  }
  return (<RaisedButton
    onClick={() => {
      if (input.value) {
        input.onChange(false);
      } else {
        input.onChange(true);
      }
    }
    }
  >
    повернуть
  </RaisedButton>);
};


export default class PeopleInput extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isLeft: false,
    };
    this.changeDirection = this.changeDirection.bind(this);
  }

  changeDirection(value) {
    this.setState({
      isLeft: value,
    });
  }

  render() {
    const { name, index, fields } = this.props; //eslint-disable-line
    return (
      <Wrapper
        style={{
          'flex-direction': this.state.isLeft ? 'row-reverse' : 'row',
        }} margin="48px 0" horisontal="space-between"
      >
        <Field validate={[required]} name={`${name}.image`} component={ImageDrop(imageDropComponent)} />
        <ContentBlock styles={ImgContentCss} innerPadding={48} vertPadding={8} imgWidth={200}>
          <FlexBox horisontal="space-between" vertical="center">
            <Field validate={[required]} name={`${name}.title`} component={TextInput} label="Заголовок" />
            <Field validate={[required]} name={`${name}.description`} component={LongTextInput} label="Описание" />
          </FlexBox>
        </ContentBlock>
        <Space size={2} />
        <Field validate={[]} name={`${name}.isLeft`} component={DirectionComponent} props={{ onChangeDirection: this.changeDirection }} />
      </Wrapper>
    );
  }
}
