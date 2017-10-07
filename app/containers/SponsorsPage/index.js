/*
 *
 * SponsorsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectSponsorsPage from './selectors';
import Content from '../../components/Content/index';
import Space from '../../components/Space/index';
import Quotes from '../../components/Quotes/index';
import Partners from '../../components/Partners/index';
import Faces from '../../components/Faces/index';
import Table from '../../components/Table/index';

export class SponsorsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="SponsorsPage"
          meta={[
            { name: 'description', content: 'Description of SponsorsPage' },
          ]}
        />
        <Content>
          <Space size={4} />
          <Quotes title="Спонсоры" />
          <Faces />
          <Space size={4} />
          <Faces />
          <Space size={4} />
          <Table />
          <Space size={4} />
          <Partners />
        </Content>
      </div>
    );
  }
}

SponsorsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SponsorsPage: makeSelectSponsorsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SponsorsPage);
