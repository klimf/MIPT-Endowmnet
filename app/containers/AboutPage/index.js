/*
 *
 * AboutPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import Title from '../../components/Title/index';
import Space from '../../components/Space/index';

import makeSelectAboutPage from './selectors';
import messages from './messages';
import { palette, block } from '../../utils/constants';
import Content from '../../components/Content/index';

const Navigation = styled.div`
  ${block}
  display: flex;
  justify-content: space-between;
  border-radius: 18px;
  min-height: 36px;
  overflow: hidden;
`;

const NavItem = styled.div`
  background-color: ${(props) => props.active ? palette.primary : palette.transparent};
  color: ${(props) => props.active ? palette.white : palette.black};
  font-size: 20px;
  padding: 9px 24px 0;
  transition: 0.3s ease;
  border-radius: 18px;
  &:hover {
    background-color: ${(props) => props.active ? palette.primary : palette.dark};
  }
`;

const Die = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  border-radius: 18px;
  transition: 0.3s ease;
  background-color: ${palette.primary};
  ${(props) => props.active ? 'left: 0;' : 'left: 50%;'}
`;


export class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      navIndex: 0,
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title="AboutPage"
          meta={[
            { name: 'description', content: 'Description of AboutPage' },
          ]}
        />
        <Content>
          <Space size={4} />
          <Navigation noHover>
            {this.props.navigation.map((item, index) => (
              <NavItem active={this.state.navIndex === index} key={index}>{item}</NavItem>
          ))
          }
          </Navigation>
          <Title><FormattedMessage {...messages.header} /></Title>
        </Content>
      </div>
    );
  }
}

AboutPage.defaultProps = {
  navigation: [
    'О нас',
    'Органы управления',
    'Отчетность',
    'Команда',
    'Документы',
  ],
};

AboutPage.propTypes = {
  navigation: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  AboutPage: makeSelectAboutPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
