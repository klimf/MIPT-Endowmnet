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
import DonationForm from 'components/DonationForm';

import makeSelectDonationPage from './selectors';
import messages from './messages';


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
          <DonationForm />
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
