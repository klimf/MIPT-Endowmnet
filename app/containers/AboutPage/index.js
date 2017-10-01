/*
 *
 * AboutPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import Title from '../../components/Title/index';
import Space from '../../components/Space/index';

import makeSelectAboutPage from './selectors';
import { palette, block } from '../../utils/constants';
import Content from '../../components/Content/index';

import howML from '../../images/how.png';
import howS from '../../images/how_mobile.png';
import Image from '../../components/Image/index';

const Navigation = styled.div`
  ${block}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 21px;
  min-height: 42px;
  overflow: hidden;
`;

const NavItem = styled.div`
  background-color: ${(props) => props.active ? palette.primary : palette.transparent};
  color: ${(props) => props.active ? palette.white : palette.black};
  cursor: pointer;
  font-size: 20px;
  padding: 11px 24px 0;
  min-height: 42px;
  transition: 0.3s ease;
  border-radius: 21px;
  &:hover {
    background-color: ${(props) => props.active ? palette.primary : palette.dark};
  }
`;

const tabs = {
  about:
    <div>
      <p>
        Фонд целевого капитала МФТИ создается на срок более 10 лет. Именно поэтому основные направления выбираются исходя из миссии Физтеха – подготовка технологических лидеров!
        <ul>
          <li>Фонд целевого капитала, учрежден и зарегистрирован в форме некоммерческого партнерства в 2014 г. в соответствии с ФЗ No275 от 30 декабря 2006 г.</li>
          <li>Фонд создан для сбора пожертвований физических и юридических лиц</li>
          <li>Средства Фонда направляются исключительно на поддержку развития МФТИ</li>
        </ul>
      </p>
      <Space size={2} />
      <Title>Как это работает?</Title>
      <Image src={howML} noSmall />
      <Image src={howS} noMedium noLarge />
    </div>,
  rules:
    <div>
      <p>
        Фонд целевого капитала МФТИ создается на срок более 10 лет. Именно поэтому основные направления выбираются исходя из миссии Физтеха – подготовка технологических лидеров!
        <ul>
          <li>Фонд целевого капитала, учрежден и зарегистрирован в форме некоммерческого партнерства в 2014 г. в соответствии с ФЗ No275 от 30 декабря 2006 г.</li>
          <li>Фонд создан для сбора пожертвований физических и юридических лиц</li>
          <li>Средства Фонда направляются исключительно на поддержку развития МФТИ</li>
        </ul>
      </p>
    </div>,
};


export class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      navIndex: 0,
    };
  }
  handleSelectTab(index) {
    this.setState({
      navIndex: index,
    });
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
              <NavItem active={this.state.navIndex === index} key={index} onClick={() => this.handleSelectTab(index)}>{item.label}</NavItem>
            ))}
          </Navigation>
          <Space size={2} />
          <Title>{this.props.navigation[this.state.navIndex].label}</Title>
          {tabs[this.props.navigation[this.state.navIndex].name]}
        </Content>
      </div>
    );
  }
}

AboutPage.defaultProps = {
  navigation: [
    {
      name: 'about',
      label: 'О нас',
      content:
        <div>
          <p>
            Фонд целевого капитала МФТИ создается на срок более 10 лет. Именно поэтому основные направления выбираются исходя из миссии Физтеха – подготовка технологических лидеров!
            <ul>
              <li>Фонд целевого капитала, учрежден и зарегистрирован в форме некоммерческого партнерства в 2014 г. в соответствии с ФЗ No275 от 30 декабря 2006 г.</li>
              <li>Фонд создан для сбора пожертвований физических и юридических лиц</li>
              <li>Средства Фонда направляются исключительно на поддержку развития МФТИ</li>
            </ul>
          </p>
          <Space size={2} />
          <Title>Как это работает?</Title>
          <Image src={howML} noSmall />
          <Image src={howS} noMedium noLarge />
        </div>,
    },
    {
      name: 'rules',
      label: 'Органы управления',
      content:
        <div>
          <p>
            Фонд целевого капитала МФТИ создается на срок более 10 лет. Именно поэтому основные направления выбираются исходя из миссии Физтеха – подготовка технологических лидеров!
            <ul>
              <li>Фонд целевого капитала, учрежден и зарегистрирован в форме некоммерческого партнерства в 2014 г. в соответствии с ФЗ No275 от 30 декабря 2006 г.</li>
              <li>Фонд создан для сбора пожертвований физических и юридических лиц</li>
              <li>Средства Фонда направляются исключительно на поддержку развития МФТИ</li>
            </ul>
          </p>
        </div>,
    },
    {
      name: 'reports',
      label: 'Отчетность',
      content:
        <div>
        </div>,
    },
    {
      name: 'team',
      label: 'Команда',
      content:
        <div>
        </div>,
    },
    {
      name: 'docks',
      label: 'Документы',
      content:
        <div>
        </div>,
    },
  ],
};

AboutPage.propTypes = {
  navigation: PropTypes.array,
  // dispatch: PropTypes.func.isRequired,
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
