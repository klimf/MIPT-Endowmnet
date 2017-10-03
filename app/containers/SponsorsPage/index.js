/*
 *
 * SponsorsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectSponsorsPage from './selectors';
import messages from './messages';

export class SponsorsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="SponsorsPage"
          meta={[
            { name: 'description', content: 'Description of SponsorsPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

SponsorsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SponsorsPage: makeSelectSponsorsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SponsorsPage);
