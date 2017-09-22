/*
 *
 * AdminPanel
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { simpleRestClient, Admin } from 'admin-on-rest';
import { createStructuredSelector } from 'reselect';
import theme from './theme';
import { aorMessagesRu } from './messages';
import makeSelectAdminPanel from './selectors';

const messages = {
  ru: aorMessagesRu,
};

export class AdminPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="AdminPanel"
          meta={[
            { name: 'description', content: 'Description of AdminPanel' },
          ]}
        />
        <Admin
          locale="ru"
          messages={messages}
          theme={theme}
          restClient={simpleRestClient('http://localhost:3000')}
        >

        </Admin>
      </div>
    );
  }
}

AdminPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  AdminPanel: makeSelectAdminPanel(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
