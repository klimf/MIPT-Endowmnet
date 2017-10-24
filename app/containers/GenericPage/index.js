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
import contentResolver from '../../components/ComponentResolver';
import Content from '../../components/Content';


export class GenericPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      path: this.props.location.pathname,
      content: [],
    };
  }

  componentWillMount = () => {
    this.props.router.listen((location) => {
      this.changePage(location ? location.pathname : this.props.location.pathname);
    });
  }


  changePage(pageName) {
    if (pageName && pageName.split('/').includes('p')) {
      this.props.fetchPage.start(pageName);
    }
  }


  render() {
    return (
      <div>
        <Helmet
          title={this.props.currentPage.name}
          meta={[
            { name: 'og:url', content: window.location.href },
            { name: 'og:type', content: 'website' },
            { name: 'og:title', content: this.props.currentPage.name },
          ]}
        />
        <div />
        <Content>
          {contentResolver(this.props.currentPage.content)}
        </Content>
      </div>
    );
  }
}

GenericPage.propTypes = {
  fetchPage: PropTypes.object,
  currentPage: PropTypes.object,
  location: PropTypes.object,
  router: PropTypes.object,
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
