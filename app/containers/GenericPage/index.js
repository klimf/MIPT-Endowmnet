/*
 *
 * GenericPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentPage } from './selectors';
import { fetchPage } from './actions';
import { ContentPresentor } from '../AdminPanel/Editor';
import Content from '../../components/Content';

export class GenericPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount = () => {
    this.props.fetchPage.start(this.props.location.pathname);
  }

  render() {
    return (
      <div>
        <Helmet
          title={this.props.currentPage.title}
          meta={[
            { name: 'description', content: this.props.currentPage.description },
          ]}
        />
        <div />
        <Content>
          {this.props.currentPage.content &&
          <ContentPresentor
            rawJSON={this.props.currentPage.content}
          />
          }
        </Content>
      </div>
    );
  }
}

GenericPage.propTypes = {
  fetchPage: PropTypes.object,
  currentPage: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentPage: makeSelectCurrentPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchPage: fetchPage.bindTo(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenericPage);
