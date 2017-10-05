/*
 *
 * AdminPanel
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Admin, Resource, Delete } from 'admin-on-rest';
import { createStructuredSelector } from 'reselect';
import theme from './theme';
import messages, { aorMessagesRu } from './messages';
import makeSelectAdminPanel from './selectors';
import * as CapitalResource from './resources/capitals/CapitalData';
import restClient from './restClient';
import { ADMIN_ROLE } from '../AuthProvider/constants';
import { makeUserSelector } from '../AuthProvider/selectors';

const aorMessages = {
  ru: aorMessagesRu,
};

export class AdminPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount = () => {
    if (!this.props.user || this.props.user.role !== ADMIN_ROLE) {
      this.props.router.replace('/forbidden');
    }
  }

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
  user: PropTypes.any,
  router: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  AdminPanel: makeSelectAdminPanel(),
  user: makeUserSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
