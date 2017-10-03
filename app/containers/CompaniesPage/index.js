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

import logo from '../../images/ronin.png';
import WdH from '../../components/WdH/index';
import FlexBox from '../../components/FlexBox/index';
import Title from '../../components/Title/index';
import FullImage from '../../components/FullImage';
import { media } from '../../utils/helpers';
import Column from '../../components/Column/index';
import ImgContent from '../../components/ImgContent/index';

const desc = 'ОАО «РОНИН Траст» - одна из ведущих независимых компаний в секторе доверительного управления. Будучи подразделением группы RONIN Partners, компания специализируется на управлении активами институциональных инвесторов, в том числе негосударственных пенсионных фондов, страховых компаний, эндаумент-фондов, юридических лиц, а также состоятельных частных клиентов. ';

const Container = styled(FlexBox)`
  height: 128px;
  position: relative;
`;
const Info = styled.div`
  margin-left: 24px;
  font-size: 20px;
  height: 100px;
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
          <FullImage noMedium noLarge src={logo} />
          <Container horisontal="space-between" noWrap >
            <WdH noSmall image={logo} rate={2.564102564} />
            <Info>
              {desc}
            </Info>
          </Container>
          <Column all={6}>
            <ImgContent image={logo} circle shadow >
              LOL kek chubureck
              LOL kek chubureck
              LOL kek chubureck
              LOL kek chubureck
              LOL kek chubureck
            </ImgContent>
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
