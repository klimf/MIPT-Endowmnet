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
import capitalsRestDecorator from './resources/capitals/restClientDecorator';
import restClient, { compose } from './restClient';
import { makeSelectUserPermissions } from '../AuthProvider/selectors';
import { ADMIN_ROLE } from '../AuthProvider/constants';
import sagas from './sagas';

const decoratedRestClient = compose([capitalsRestDecorator])(restClient);
const aorMessages = {
  ru: aorMessagesRu,
};

export class AdminPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount = () => {
    setTimeout(() => {
      if (!this.props.isAdmin) {
        this.props.router.replace('/forbidden');
      }
    }, 2000);
  }


  render() {
    return this.props.isAdmin && (
      <div>
        <Helmet
          title={messages.header.defaultMessage}
        />
        <Admin
          customSagas={sagas}
          title={messages.header.defaultMessage}
          locale="ru"
          messages={aorMessages}
          theme={theme}
          restClient={decoratedRestClient}
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
  isAdmin: PropTypes.bool,
  router: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  AdminPanel: makeSelectAdminPanel(),
  isAdmin: makeSelectUserPermissions(ADMIN_ROLE),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
