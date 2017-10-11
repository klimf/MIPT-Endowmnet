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
import { fetchStories } from './actions';
import messages from './messages';

export class StoriesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount = () => {
    this.props.fetchStories.start();
  }

  render() {
    return (
      <div>
        <Helmet
          title="Истории"
          meta={[
            { name: 'description', content: 'Истории работы с фондом МФТИ' },
          ]}
        />
        <Content>
          <Space size={4} />
          {this.props.Stories &&
          <Quotes items={this.props.Stories.map((x) => Object.assign({}, x.owner, { link: `stories/${x.id}` }))} title={messages.header.defaultMessage} />
          }

        </Content>
      </div>
    );
  }
}

StoriesPage.propTypes = {
  Stories: PropTypes.array,
  fetchStories: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  Stories: makeSelectStoriesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchStories: fetchStories.bindTo(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoriesPage);
