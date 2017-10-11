/*
 *
 * StoryPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import { makeSelectStoriesItem } from './selectors';
import QuoteItem from '../../components/Quotes/Item';
import Content from '../../components/Content/index';
import Title from '../../components/Title/index';


import Space from '../../components/Space/index';
import { fetchStoriesData } from './actions';
import contentResolver from '../../components/ComponentResolver';

export class StoryPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.fetchStoriesData.start({ id: this.props.routeParams.id });
  }
  render() {
    return (
      <div>
        <Helmet
          title="StoryPage"
          meta={[
            { name: 'description', content: 'Description of StoryPage' },
          ]}
        />
        <Content>
          <Space size={4} />
          <Title>История</Title>
          <QuoteItem noMore {...this.props.story.owner} />
          <Space size={2} />
          {this.props.story.content &&
             contentResolver(this.props.story.content)
          }
        </Content>
      </div>
    );
  }
}

StoryPage.propTypes = {
  story: PropTypes.object,
  fetchStoriesData: PropTypes.object,
  routeParams: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  story: makeSelectStoriesItem(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchStoriesData: fetchStoriesData.bindTo(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryPage);
