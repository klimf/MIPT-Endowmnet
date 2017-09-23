/*
 *
 * NewsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import News from 'components/News';
import Content from 'components/Content';
import Space from 'components/Space';

import makeSelectNewsPage from './selectors';
import messages from './messages';

export class NewsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          <News title={messages.header.defaultMessage} />
        </Content>
      </div>
    );
  }
}

NewsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  NewsPage: makeSelectNewsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
