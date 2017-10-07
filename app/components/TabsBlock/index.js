/**
*
* TabsBlock
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { block, palette } from '../../utils/constants';
import Attachments from '../Attachments/index';
import { media } from '../../utils/helpers';

const Wrapper = styled.div`
  ${block}
`;

const Content = styled.div`
  padding: 24px 36px 36px;
  & h2 {
    font-size: 24px;
    text-align: center;
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 42px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  background-color: ${palette.primary};
  ${media.small`
    border-radius: 8px;
  `}
`;

const NavItem = styled.div`
  background-color: ${(props) => props.active ? palette.white : palette.transparent};
  color: ${(props) => props.active ? palette.black : palette.white};
  cursor: pointer;
  font-size: 20px;
  padding: 11px 24px 0;
  min-height: 42px;
  min-width: 100px;
  white-space: nowrap;
  transition: 0.3s ease;
  border-radius: 8px 8px 0 0;
  text-align: center;
  width: ${(props) => props.qty && 100 / props.qty}%;
  &:hover {
    background-color: ${(props) => props.active ? palette.white : palette.light};
  }
  ${media.small`
    border-radius: 8px;
  `}
`;

class TabsBlock extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      navIndex: 1,
    };
  }
  handleSelectTab(index) {
    this.setState({
      navIndex: index,
    });
  }
  render() {
    const qty = this.props.items.length > 6 ? 6 : this.props.items.length;
    return (
      <Wrapper noHover>
        <Navigation noHover>
          {this.props.items.map((item, index) => (
            <NavItem qty={qty} active={this.state.navIndex === index} key={index} onClick={() => this.handleSelectTab(index)}>{item.name}</NavItem>
          ))}
        </Navigation>
        <Content>
          <h2>{this.props.items[this.state.navIndex].label}</h2>
          {this.props.items[this.state.navIndex].content}
        </Content>
      </Wrapper>
    );
  }
}

TabsBlock.propTypes = {
  items: PropTypes.array,
};

TabsBlock.defaultProps = {
  items: [
    {
      name: '2014',
      label: 'Отчетность за 2014г.',
      content:
        <div>
          <Attachments />
        </div>,
    },
    {
      name: '2015',
      label: 'Отчетность за 2015г.',
      content:
        <div>
          <Attachments />
        </div>,
    },
    {
      name: '2016',
      label: 'Отчетность за 2016г.',
      content:
        <div>
          <Attachments />
        </div>,
    },
    {
      name: '2017',
      label: 'Отчетность за 2017г.',
      content:
        <div>
          <Attachments />
        </div>,
    },
  ],
};

export default TabsBlock;
