/*
 *
 * CapitalsPage
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import Title from 'components/Title';
import Space from 'components/Space/index';
import Content from 'components/Content';

import makeSelectCapitalsPage from './selectors';
import messages from './messages';

const capitals = [
  {
    name: 'Развитие факультета проблем физики и энергетики',

  },
];

const MainCapital = styled.div`
    
`;

export class CapitalsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Капиталы"
          meta={[
            { name: 'description', content: 'Капиталы фонда МФТИ' },
          ]}
        />
        <Space size={4} />
        <Title><FormattedMessage {...messages.header} /></Title>
        <Content>
          <MainCapital>
            <FormattedMessage {...messages.mainCapital} />
          </MainCapital>
        </Content>
      </div>
    );
  }
}

CapitalsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  CapitalsPage: makeSelectCapitalsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CapitalsPage);
