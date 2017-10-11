/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Content from 'components/Content';
import Masthead from 'components/Masthead';
import Space from 'components/Space';
import Image from 'components/FullImage';
import Title from 'components/Title';
import News from 'components/News';
import Quotes from 'components/Quotes';
import Partners from 'components/Partners';
import Button from 'components/Button';
import makeSelectHomePage from './selectors';
import howML from '../../images/how.png';
import howS from '../../images/how_mobile.png';
import { fetchFundVolume } from './actions';


class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount = () => {
    this.props.fetchFundVolume.start();
  }

  render() {
    return (
      <div>
        <Helmet />
        <Content>
          <Space size={5} />
          <Masthead
            purpose={this.props.homePage.fundVolume.data && this.props.homePage.fundVolume.data.need}
            collected={this.props.homePage.fundVolume.data && this.props.homePage.fundVolume.data.given}
          />
          <Space size={5} />
          <Title>Как это работает?</Title>
          <Image src={howML} local noSmall />
          <Image src={howS} local noMedium noLarge />
          <Space size={5} />
          <News title="Последние новости и мероприятия" />
          <Space size={1} />
          <Button centred type="border" to="/news">Все новости</Button>
          <Space size={5} />
          <Quotes title="Истории" />
          <Space size={1} />
          <Button centred type="border" to="/stories">Все истории</Button>
          <Space size={2} />
          <Partners />
          <Space size={2} />
          <Button centred type="border" to="/sponsors">Все спонсоры</Button>
          <Space size={5} />
        </Content>
      </div>
    );
  }
}

HomePage.propTypes = {
  homePage: PropTypes.object,
  fetchFundVolume: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchFundVolume: fetchFundVolume.bindTo(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
