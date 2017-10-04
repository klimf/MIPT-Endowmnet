/*
 *
 * StoriesPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import Quotes from 'components/Quotes';
import Content from 'components/Content';
import Space from 'components/Space';

import makeSelectStoriesPage from './selectors';
import messages from './messages';

export class StoriesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Истории"
          meta={[
            { name: 'description', content: 'Description of StoriesPage' },
          ]}
        />
        <Content>
          <Space size={4} />
          <Quotes title={messages.header.defaultMessage} />
        </Content>
      </div>
    );
  }
}

StoriesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  StoriesPage: makeSelectStoriesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoriesPage);
