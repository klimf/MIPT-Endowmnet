/*
 *
 * AchievementsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectAchievementsPage from './selectors';
import Title from '../../components/Title/index';
import Content from '../../components/Content/index';
import { palette } from '../../utils/constants';
import { hideOn, media } from '../../utils/helpers';
import Space from '../../components/Space/index';

const Line = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 140px;
  width: 3px;
  background-color: ${palette.disabled};
  ${hideOn}
`;

const StyledContent = styled(Content)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;
const Item = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 42px;
  ${media.small`
    display: block;
  `}
`;
const Year = styled.div`    
  font-size: 36px;
  font-weight: 300;
  width: 140px;
  display: inline-block;
  padding: 10px 0;
  margin-bottom: 12px;
  color: ${palette.primary};
`;
const Description = styled.div`
  font-size: 20px;   
  line-height: 24px;
  width: calc(100% - 140px);
  display: inline-block;
  color: ${palette.black};
  ${media.small`
    width: 100%;
  `}
`;
const Dot = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 8px;
  left: 94px;
  background-color: ${palette.primary};
  border: 3px solid ${palette.background};
  border-radius: 50%;
  ${hideOn}
`;

export class AchievementsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="AchievementsPage"
          meta={[
            { name: 'description', content: 'Description of AchievementsPage' },
          ]}
        />
        <StyledContent>
          <Line noSmall />
          <Space size={4} />
          <Title>Достижения</Title>
          <Space size={1} />
          {this.props.items.map((item, index) => (
            <Item key={index}>
              <Year>
                {item.year}
              </Year>
              <Dot noSmall />
              <Description>
                {item.description}
              </Description>
            </Item>
          ))}
        </StyledContent>
      </div>
    );
  }
}

AchievementsPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  items: PropTypes.array,
};

AchievementsPage.defaultProps = {
  items: [
    {
      year: 2017,
      description: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов. \n \n День выпускника - это ряд зрелищных мероприятий, разработанных университетом для того, чтобы ребята запомнили этот день не только умом, но и душой, и сердцем! Весь вечер для молодых людей выступают почетные приглашенные гости.',
    },
    {
      year: 2016,
      description: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов. \n \n День выпускника - это ряд зрелищных мероприятий, разработанных университетом для того, чтобы ребята запомнили этот день не только умом, но и душой, и сердцем! Весь вечер для молодых людей выступают почетные приглашенные гости.',
    },
    {
      year: 2015,
      description: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов. \n \n День выпускника - это ряд зрелищных мероприятий, разработанных университетом для того, чтобы ребята запомнили этот день не только умом, но и душой, и сердцем! Весь вечер для молодых людей выступают почетные приглашенные гости.',
    },
  ],
};

const mapStateToProps = createStructuredSelector({
  AchievementsPage: makeSelectAchievementsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AchievementsPage);
