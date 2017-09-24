/*
 *
 * AdminPanel
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Admin, Resource, Delete, showNotification } from 'admin-on-rest';
import { createStructuredSelector } from 'reselect';
import theme from './theme';
import messages, { aorMessagesRu } from './messages';
import makeSelectAdminPanel from './selectors';
import * as CapitalResource from './resources/capitals/CapitalData';
import restClient from './restClient';

const aorMessages = {
  ru: aorMessagesRu,
};

export class AdminPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title={messages.header.defaultMessage}
        />
        <Admin
          title={messages.header.defaultMessage}
          locale="ru"
          messages={aorMessages}
          theme={theme}
          restClient={restClient()}
        >
          <Resource
            name="capitals"
            options={{ label: messages.capitalsLabel.defaultMessage }}
            list={CapitalResource.CapitalsList}
            edit={CapitalResource.CapitalsEdit}
            create={CapitalResource.CapitalsCreate}
            remove={Delete}
          />
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
