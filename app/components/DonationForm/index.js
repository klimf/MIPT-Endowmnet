/**
*
* Input
*
*/

import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';

import Space from 'components/Space';
import Select from 'components/Select';
import Button from 'components/Button';
import Input from 'components/Input';
import Column from 'components/Column';
import FlexBox from 'components/FlexBox';
import { palette } from '../../utils/constants';
import { formatMoney } from '../../utils/helpers';


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
  justify-content: space-between;
`;

const MoneyButton = styled.div`
  padding: 9px 24px;
  height: 36px;
  border-radius: 18px;
  background-color: ${(props) => props.active ? palette.primary : palette.disabled};
  color: ${palette.white};
  transition: 0.3s;
  font-size: 20px;
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
      selectIndex: 1,
    };
    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
    this.handleSelectClick = this.handleSelectClick.bind(this);
  }
  handleCheckBoxClick() {
    this.setState({
      isStudent: !this.state.isStudent,
      isCardPayment: this.state.isCardPayment,
      selectIndex: this.state.selectIndex,
    });
  }
  handleSelectClick() {
    this.setState({
      isStudent: this.state.isStudent,
      isCardPayment: !this.state.isCardPayment,
      selectIndex: this.state.selectIndex,
    });
  }
  handleSelectMoney(index) {
    this.setState({
      isStudent: this.state.isStudent,
      isCardPayment: this.state.isCardPayment,
      selectIndex: index,
    });
  }
  render() {
    return (
      <div>
        <Column padding={p}>
          <Select isRight={this.state.isCardPayment} onClick={this.handleSelectClick} left="Банковской картой" right="Безналичным переводом" />
        </Column>
        <Space size={2} />
        <FlexBox>
          <Column all={4} small={12} padding={p}>
            <Input label="Имя" />
          </Column>
          <Column all={4} small={12} padding={p}>
            <Input label="Фамилия" />
          </Column>
          <Column all={4} small={12} padding={p}>
            <Input label="E-mail" />
          </Column>
          <Space size={2} />
          <Column all={4} small={12} padding={p}>
            <Input onClick={this.handleCheckBoxClick} checked={this.state.isStudent} label="Я не выпускник МФТИ" type="checkbox" />
            <Space size={2} />
          </Column>
          <Hideable all={8} small={12} hide={!this.state.isStudent} >
            <Column all={6} small={12} padding={p}>
              <Input label="Год выпуска" />
            </Column>
            <Column all={6} small={12} padding={p}>
              <Input label="Факультет" />
            </Column>
          </Hideable>
          <Space size={2} />
          <Column all={9} small={12} padding={p}>
            <MoneySelect>
              {prices.map((item, index) => (
                <MoneyButton key={index}>{formatMoney(item)}₽</MoneyButton>
              ))}
            </MoneySelect>
          </Column>
          <Column all={3} small={12} padding={p}>
            <MoneyInput placeholder="Другая сумма" />
          </Column>
          <Space size={2} />
          <Column small={12} medium={12} large={5} padding={p}>
            <Info>Нажимая на кнопку оплаты вы соглашаетесь c условиями оплаты, обработки персональных данных и офертой</Info>
            <Space size={2} />
          </Column>
          <Column small={12} medium={6} large={4} padding={p}>
            <Select left="Разовая" right="В месяц" />
            <Space size={2} />
          </Column>
          <Column small={12} medium={6} large={3} padding={p}>
            <Button expanded type="header">Перейти к оплате</Button>
            <Space size={2} />
          </Column>
        </FlexBox>
      </div>
    );
  }
}

DonationForm.propTypes = {

};

export default DonationForm;
