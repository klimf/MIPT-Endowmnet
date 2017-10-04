/* eslint-disable react/no-unescaped-entities */
/*
 *
 * CompaniesPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import makeSelectCompaniesPage from './selectors';
import Content from '../../components/Content/index';
import Space from '../../components/Space/index';

import WdH from '../../components/WdH/index';
import FlexBox from '../../components/FlexBox/index';
import Title from '../../components/Title/index';
import FullImage from '../../components/FullImage';
import { media } from '../../utils/helpers';
import Column from '../../components/Column/index';
import ImgContent from '../../components/ImgContent/index';
import Chat from '../../components/Chat/index';

import logo from '../../images/ronin.png';
import face1 from '../../images/Face1.jpg';
import face2 from '../../images/Face2.jpg';
import Line from '../../components/Line/index';

const desc = 'ОАО «РОНИН Траст» - одна из ведущих независимых компаний в секторе доверительного управления. Будучи подразделением группы RONIN Partners, компания специализируется на управлении активами институциональных инвесторов, в том числе негосударственных пенсионных фондов, страховых компаний, эндаумент-фондов, юридических лиц, а также состоятельных частных клиентов. ';

const Container = styled(FlexBox)`
  height: 128px;
  position: relative;
  ${media.small`
    height: auto;
  `}
`;
const Info = styled.div`
  margin-left: 24px;
  font-size: 20px;
  ${media.small`
    margin: 24px 0 0 0;
  `}
`;

export class CompaniesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="CompaniesPage"
          meta={[
            { name: 'description', content: 'Description of CompaniesPage' },
          ]}
        />
        <Content>
          <Space size={4} />
          <Title>Управляющие компании</Title>
          <Space size={1} />
          <FullImage width="50%" noSmall noLarge src={logo} />
          <FullImage noMedium noLarge src={logo} />
          <Space noLarge size={2} />
          <Container horisontal="space-between" noWrap >
            <WdH noSmall noMedium image={logo} rate={2.564102564} />
            <Info>
              {desc}
            </Info>
          </Container>
          <Space size={4} />
          <Title>Сотрудники о «РОНИН Траст»</Title>
          <Column padding="0 48px 0 0" paddingSmall="0" all={6} small={12}>
            <ImgContent margin="0" imgWidth={120} image={face1} circle shadow centredColumn noAdaptive>
              <h2>Гаек Андрей</h2>
              <p>Управляющий партнер группы компаний "RONIN Partners"</p>
            </ImgContent>
            <Space size={2} />
            <Chat />
            <Line absolute right color="disabled" noSmall />
          </Column>
          <Space noMedium noLarge size={2} />
          <Line color="disabled" noMedium noLarge />
          <Space noMedium noLarge size={2} />
          <Column padding="0 0 0 48px" paddingSmall="0" all={6} small={12}>
            <ImgContent margin="0" imgWidth={120} image={face2} circle shadow centredColumn noAdaptive>
              <h2>Гаек Андрей</h2>
              <p>Управляющий партнер группы компаний "RONIN Partners"</p>
            </ImgContent>
            <Space size={2} />
            <Chat />
          </Column>
        </Content>
      </div>
    );
  }
}

CompaniesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  CompaniesPage: makeSelectCompaniesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesPage);
