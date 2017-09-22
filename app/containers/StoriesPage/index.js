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

import face1 from '../../images/Face1.jpg';
import face2 from '../../images/Face2.jpg';
import face3 from '../../images/Face3.jpg';

const quotes = [
  {
    name: 'Сергей Гуз',
    status: 'Зав. кафедры физики',
    quote: 'Развитие факультета проблем физики и энергетики - важная составляющая работы фонда университета МФТИ',
    image: face1,
    link: '/',
  },
  {
    name: 'Сергей Гуз',
    status: 'Зав. кафедры физики',
    quote: 'Развитие факультета проблем физики и энергетики - важная составляющая работы фонда университета МФТИ',
    image: face2,
    link: '/',
  },
  {
    name: 'Сергей Гуз',
    status: 'Зав. кафедры физики',
    quote: 'Развитие факультета проблем физики и энергетики - важная составляющая работы фонда университета МФТИ',
    image: face3,
    link: '/',
  },
];

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
          <Quotes items={quotes} title={messages.header.defaultMessage} />
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
