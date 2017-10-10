/*
 *
 * NewsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import { NewsItem } from 'components/News';
import Title from 'components/Title';
import Content from 'components/Content';
import Space from 'components/Space';

import makeSelectNewsPage from './selectors';
import messages from './messages';
import {
  fetchNews,
} from './actions';

export class NewsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount = () => {
    this.props.fetchNews.start();
  }

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
          <Title>{messages.header.defaultMessage}</Title>
          {this.props.news.map((item, index) => (
            <NewsItem key={index} link={`/news/${item.id}`} {...item} />
          ))}
        </Content>
      </div>
    );
  }
}

NewsPage.propTypes = {
  fetchNews: PropTypes.object,
  news: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  news: makeSelectNewsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchNews: fetchNews.bindTo(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
