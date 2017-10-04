/*
 *
 * AboutPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import styled, { css } from 'styled-components';

import Title from '../../components/Title/index';
import Space from '../../components/Space/index';

import makeSelectAboutPage from './selectors';
import { palette, block } from '../../utils/constants';
import Content from '../../components/Content/index';

import Image from '../../components/FullImage/index';
import Column from '../../components/Column/index';
import ListBlock from '../../components/ListBlock/index';
import NegPadding from '../../components/NegPadding/index';
import ImgContent from '../../components/ImgContent/index';
import FlexBox from '../../components/FlexBox/index';

import img1 from '../../images/Bitmap1.jpg';
import img2 from '../../images/Bitmap2.jpg';
import img3 from '../../images/Bitmap3.jpg';


import reportML from '../../images/report.png';
import reportS from '../../images/report_mobile.png';
import Faces from '../../components/Faces/index';
import Attachments from '../../components/Attachments/index';
import TabsBlock from '../../components/TabsBlock/index';

const Navigation = styled.div`
  ${block}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 42px;
  overflow: hidden;
  border-radius: 21px;
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

const ImgContentCss = css`
  & p {
    font-size: 20px;
    margin: 0;
    color: ${palette.black};
  }
  & h2 {
    font-size: 28px;
    margin: 0 0 24px 0;
    color: ${palette.primary};
  }
`;

const lists = [
  {
    title: 'Попечительский Совет',
    list: [
      'Определение и назначение целей использования дохода от целевого капитала',
      'Контроль исполнения бюджета',
      'Контроль и согласование отчетов органов управления Фонда',
    ],
    description: 'Определение и назначение целей использования дохода от целевого капитала Контроль исполнения бюджета Контрольисогласованиеотчетов органов управления Фонда Определение и назначение целей использования дохода от целевого капитала Контроль исполнения бюджета Контрольисогласованиеотчетов органов управления Фонда Определение и назначение целей использования дохода от целевого капитала Контроль исполнения бюджета',
    image: img1,
  },
  {
    title: 'Правление',
    list: [
      'Определение и назначение целей использования дохода от целевого капитала',
      'Контроль исполнения бюджета',
      'Контроль и согласование отчетов органов управления Фонда',
      'Привлечение новых доноров фонда',
    ],
    description: 'Определение и назначение целей использования дохода от целевого капитала Контроль исполнения бюджета Контрольисогласованиеотчетов органов управления Фонда Определение и назначение целей использования дохода от целевого капитала Контроль исполнения бюджета Контрольисогласованиеотчетов органов управления Фонда Определение и назначение целей использования дохода от целевого капитала Контроль исполнения бюджета',
    image: img2,
  },
  {
    title: 'Исполнительная дирекция',
    list: [
      'Определение и назначение целей использования дохода от целевого капитала',
      'Контроль исполнения бюджета',
    ],
    description: 'Определение и назначение целей использования дохода от целевого капитала Контроль исполнения бюджета Контрольисогласованиеотчетов органов управления Фонда Определение и назначение целей использования дохода от целевого капитала Контроль исполнения бюджета Контрольисогласованиеотчетов органов управления Фонда Определение и назначение целей использования дохода от целевого капитала Контроль исполнения бюджета',
    image: img3,
  },
];


export class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      navIndex: 2,
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
        </Content>
        {this.props.navigation[this.state.navIndex].content}
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
        <Content>
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
          <Image src={reportML} noSmall />
          <Image src={reportS} noMedium noLarge />
        </Content>,
    },
    {
      name: 'rules',
      label: 'Органы управления',
      content:
        <Content>
          <NegPadding padding={24}>
            <FlexBox>
              {lists.map((item, index) => (
                <Column key={index} padding="0 24px" small={12} medium={6} large={4}>
                  <ListBlock {...item} />
                </Column>
              ))}
            </FlexBox>
          </NegPadding>
          {lists.map((item, index) => (
            <ImgContent styles={ImgContentCss} vertPadding={8} key={index} image={item.image} imgWidth={200} shadow rounded>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </ImgContent>
          ))}
        </Content>,
    },
    {
      name: 'reports',
      label: 'Отчетность',
      content:
        <Content>
          <Space size={2} />
          <Image src={reportML} noSmall />
          <Image src={reportS} noMedium noLarge />
          <Space size={3} />
          <TabsBlock />
        </Content>,
    },
    {
      name: 'team',
      label: 'Команда',
      content:
        <Content>
          <Faces title={false} />
        </Content>,
    },
    {
      name: 'docks',
      label: 'Документы',
      content:
        <Content>
          <Attachments />
        </Content>,
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
