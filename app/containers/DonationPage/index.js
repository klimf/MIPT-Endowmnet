/*
 *
 * DonationPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import Content from 'components/Content';
import Space from 'components/Space';
import Title from 'components/Title';
import Select from 'components/Select';
import Input from 'components/Input';
import Column from 'components/Column';

import makeSelectDonationPage from './selectors';
import messages from './messages';
import FlexBox from '../../components/FlexBox/index';

const p = '0 12px';

const Hideable = styled(Column)`
  & > div{
    transition: 0.3s ease;
    opacity: ${(props) => props.hide ? 0 : 100};
    transform: translateY(${(props) => props.hide ? '-32px' : '0'});
  }
  & > div:nth-child(2){
    transition-delay: 0.1s;
  }
`;

export class DonationPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isStudent: true,
      isCardPayment: true,
    };
    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
    this.handleSelectClick = this.handleSelectClick.bind(this);
  }
  handleCheckBoxClick() {
    this.setState({
      isStudent: !this.state.isStudent,
      isCardPayment: this.state.isCardPayment,
    });
  }
  handleSelectClick() {
    this.setState({
      isStudent: this.state.isStudent,
      isCardPayment: !this.state.isCardPayment,
    });
  }
  render() {
    return (
      <div>
        <Helmet
          title="DonationPage"
          meta={[
            { name: 'description', content: 'Description of DonationPage' },
          ]}
        />
        <Content>
          <Space size={4} />
          <Title><FormattedMessage {...messages.header} /></Title>
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
            <p>Нажимая на кнопку оплаты вы соглашаетесь c условиями оплаты, обработки персональных данных и офертой</p>
          </FlexBox>
        </Content>
      </div>
    );
  }
}

DonationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  DonationPage: makeSelectDonationPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DonationPage);
