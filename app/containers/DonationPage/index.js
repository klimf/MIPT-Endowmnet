/*
 *
 * DonationPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';


import Content from 'components/Content';
import Space from 'components/Space';
import DonationForm from 'components/DonationForm';

import makeSelectDonationPage from './selectors';


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
          <DonationForm title="Пополнить фонд" />
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
