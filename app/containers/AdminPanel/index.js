/*
 *
 * AdminPanel
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectAdminPanel from './selectors';
import messages from './messages';
import { LabeledBlock } from '../../components/Block';


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
        <LabeledBlock title={'Панель администратора'}>
          kek
        </LabeledBlock>
        <FormattedMessage {...messages.header} />
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
