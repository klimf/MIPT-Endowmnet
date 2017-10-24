import React from 'react';
import { Field } from 'redux-form';
import {
  LongTextInput,
  TextInput,
} from 'admin-on-rest';
import { RaisedButton } from 'material-ui';
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


// export const PeopleInput = ({ name, index, fields }) => ( //eslint-disable-line
//   <Wrapper
//     style={{
//       'flex-direction': 'row-reverse',
//     }} margin="48px 0" horisontal="space-between"
//   >
//     <Field validate={[required]} name={`${name}.image`} component={ImageDrop(imageDropComponent)} />
//     <ContentBlock padding="24px" innerPadding={48} vertPadding={48} imgWidth={200} block>
//       <Quote>
//         <Field validate={[required]} name={`${name}.quote`} component={LongTextInput} label="Цитата" />
//       </Quote>
//       <FlexBox horisontal="space-between" vertical="center">
//         <Info>
//           <Field validate={[required]} name={`${name}.status`} component={TextInput} label="Статус" />
//           <b>
//             <Field validate={[required]} name={`${name}.name`} component={DirectionComponent} />
//           </b>
//         </Info>
//         <Field validate={[required]} name={`${name}.direction`} component={TextInput} label="Имя" />
//       </FlexBox>
//       <Decoration />
//     </ContentBlock>
//   </Wrapper>
// );


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
            <Field validate={[]} name={`${name}.isLeft`} component={DirectionComponent} props={{ onChangeDirection: this.changeDirection }} />
          </FlexBox>
          <Decoration />
        </ContentBlock>
      </Wrapper>
    );
  }
}
