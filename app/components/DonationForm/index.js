/**
*
* Input
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Space from 'components/Space';
import Select from 'components/Select';
import Button from 'components/Button';
import Input from 'components/Input';
import Column from 'components/Column';
import FlexBox from 'components/FlexBox';
import Title from 'components/Title';
import { palette } from '../../utils/constants';
import { formatMoney, media } from '../../utils/helpers';
import { Form } from '../Form';


const p = '0 12px';

const prices = [100, 500, 1000, 3000, 5000, 10000];

const Hideable = styled(Column)`
  transition-delay: 0.2s;
  transition: 0.5s;
  max-height: ${(props) => props.hide ? 0 : '200px'};
  & > div{
    transition: 0.3s ease;
    opacity: ${(props) => props.hide ? 0 : 100};
    transform: translateY(${(props) => props.hide ? '-32px' : '0'});
  }
  & > div:nth-child(2){
    transition-delay: 0.1s;
  }
`;

const Info = styled.p`
  margin: 0;
  color: ${palette.gray};
`;

const MoneySelect = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${media.medium`
    justify-content: flex-start;
  `}
`;

const MoneyButton = styled.div`
  padding: 9px 24px;
  height: 36px;
  border-radius: 18px;
  background-color: ${(props) => props.active ? palette.primary : palette.disabled};
  color: ${palette.white};
  transition: 0.3s;
  font-size: 20px;
  margin: 0 12px 12px 0;
  &:hover{
    background-color: ${(props) => props.active ? palette.primary : palette.gray};
  }
`;

const MoneyInput = styled.input`
  height: 36px;
  padding-bottom: 5px;
  border-radius: 18px;
  width: 100%;
  outline: none;
  background-color: ${(props) => props.active ? palette.primary : palette.transparent};
  color: ${(props) => props.active ? palette.white : palette.black};
  border: 3px ${(props) => props.active ? palette.transparent : `dashed ${palette.disabled}`} ;
  transition: 0.3s;
  font-size: 20px;
  text-align: center;
  &:hover{
    border-color: ${(props) => props.active ? palette.transparent : palette.gray};
  } 
`;

export class DonationForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isStudent: true,
      isCardPayment: true,
      isOneTime: true,
      selectIndex: 2,
    };
    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
    this.handleCardPaymentClick = this.handleCardPaymentClick.bind(this);
    this.handleOneTimeClick = this.handleOneTimeClick.bind(this);
  }
  handleCheckBoxClick() {
    this.setState({
      isStudent: !this.state.isStudent,
    });
  }
  handleCardPaymentClick() {
    this.setState({
      isCardPayment: !this.state.isCardPayment,
    });
  }
  handleOneTimeClick() {
    this.setState({
      isOneTime: !this.state.isOneTime,
    });
  }
  handleSelectMoney(index) {
    this.setState({
      selectIndex: index,
    });
  }
  render() {
    return (
      <Form>
        <Title>{this.props.title}</Title>
        <Column padding={p}>
          <Select isRight={this.state.isCardPayment} onClick={this.handleCardPaymentClick} left="Банковской картой" right="Безналичным переводом" />
        </Column>
        <Space size={2} />
        <FlexBox>
          <Column all={4} small={12} padding={p}>
            <Input name="name" label="Имя" validations={['nothing']} />
          </Column>
          <Column all={4} small={12} padding={p}>
            <Input name="surname" label="Фамилия" validations={['nothing']} />
          </Column>
          <Column all={4} small={12} padding={p}>
            <Input name="email" label="E-mail" validations={['nothing']} />
          </Column>
          <Space size={2} />
          <Column all={4} small={12} padding={p}>
            <Input name="checkStudent" onClick={this.handleCheckBoxClick} checked={this.state.isStudent} label="Я выпускник МФТИ" type="checkbox" validations={['nothing']} />
            <Space size={2} />
          </Column>
          <Hideable all={8} small={12} hide={!this.state.isStudent} >
            <Column all={6} small={12} padding={p}>
              <Input name="year" label="Год выпуска" validations={['nothing']} />
            </Column>
            <Column all={6} small={12} padding={p}>
              <Input name="department" label="Факультет" validations={['nothing']} />
            </Column>
          </Hideable>
          <Space size={2} />
          <Column all={9} small={12} padding={p}>
            <MoneySelect>
              {prices.map((item, index) => (
                <MoneyButton active={this.state.selectIndex === index} key={index} onClick={() => this.handleSelectMoney(index)}>{formatMoney(item)}₽</MoneyButton>
              ))}
            </MoneySelect>
          </Column>
          <Column all={3} small={12} padding={p}>
            <MoneyInput active={this.state.selectIndex === 31} onClick={() => this.handleSelectMoney(31)} placeholder="Другая сумма" />
          </Column>
          <Space size={2} />
          <Column small={12} medium={12} large={5} padding={p}>
            <Info>Нажимая на кнопку оплаты вы соглашаетесь c условиями оплаты, обработки персональных данных и офертой</Info>
            <Space size={2} />
          </Column>
          <Column small={12} medium={6} large={4} padding={p}>
            <Select isRight={this.state.isOneTime} onClick={this.handleOneTimeClick} left="Разовая" right="В месяц" />
            <Space size={2} />
          </Column>
          <Column small={12} medium={6} large={3} padding={p}>
            <Button expanded type="header">Перейти к оплате</Button>
            <Space size={2} />
          </Column>
        </FlexBox>
      </Form>
    );
  }
}

DonationForm.defaultProps = {
  title: 'Пополнить фонд',
};
DonationForm.propTypes = {
  title: PropTypes.string,
};

export default DonationForm;
