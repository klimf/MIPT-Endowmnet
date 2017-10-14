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
import { fetchPage, fetchPagesTree } from './actions';
import contentResolver from '../../components/ComponentResolver';
import Content from '../../components/Content';


export class GenericPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      path: this.props.location.pathname,
    };
  }

  componentWillMount = () => {
    this.changePage(this.props.location.pathname);
  }


  componentDidUpdate = () => {
    if (this.state.path !== this.props.location.pathname) {
      this.changePage(this.props.location.pathname);
      this.setState({ path: this.props.location.pathname });
    }
  }

  changePage(pageName) {
    // this.props.router.push(pageName);
    this.props.fetchPage.start(pageName);
    this.props.fetchPagesTree.start();
  }

  isThatPage(pageName) {
    const path = this.this.props.location.pathname.split('/');
    return path.lastIndexOf(pageName) === (path.length);
  }

  render() {
    return (
      <div>
        <Helmet
          title={this.props.currentPage.name}
          meta={[
            { name: 'description', content: this.props.currentPage.description },
          ]}
        />
        <div />
        <Content>
          {this.props.currentPage.content &&
            contentResolver(this.props.currentPage.content)
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
  fetchPagesTree: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentPage: makeSelectCurrentPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchPage: fetchPage.bindTo(dispatch),
    fetchPagesTree: fetchPagesTree.bindTo(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenericPage);
