import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import EditIcon from '../../../images/pencil-edit-button.svg';
import CloseIcon from '../../../images/close-button.svg';
import CapitalSmall from './CapitalSmall';
import CapitalMedium from './CapitalMedium';
import CapitalLarge from './CapitalLarge';
import CapitalLargest from './СapitalLargest';
import { palette, unit } from '../../../utils/constants';


const StyledLink = styled(Link)`
  color: ${palette.black};
  text-decoration: none;
  touch-action: manipulation !important;
`;

const EditableWrap = styled(StyledLink)``.withComponent('div');

const EditToolBarWrap = styled.div`
  position: absolute;
  z-index: 5;
  top: ${unit * 2}px;
  right: ${unit * 2}px;
  display: flex;
`;

const ToolButton = styled.div`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background: ${palette.primary};
  margin-left: 12px;
  background-image: url(${(props) => props.icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 18px !important;
  padding: 5px;
  transition: .3s ease-in-out;
  box-shadow: 0 12px 24px ${palette.dark};
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 16px 28px ${palette.dark};
  }
`;

const Editable = (props) => (
  <EditableWrap {...props}>
    <EditToolBarWrap>
      <ToolButton
        icon={EditIcon}
        onMouseDown={(e) => {
          e.stopPropagation();
          const editParams = {
            data: Object.assign({}, props.data),
            'data-grid': Object.assign({}, props['data-grid']),
          };
          props.onBlockEditStart(editParams);
        }}
      ></ToolButton>
      <ToolButton
        icon={CloseIcon}
        onMouseDown={(e) => {
          e.stopPropagation();
          props.onBlockDeleteStart(props.data);
        }}
      ></ToolButton>
    </EditToolBarWrap>
    {props.children}
  </EditableWrap>
);

Editable.propTypes = {
  onBlockDeleteStart: React.PropTypes.func,
  data: React.PropTypes.object,
  children: React.PropTypes.any,
};

const PreviewWrap = styled(StyledLink)``.withComponent('div');

export const capitalMap = {
  '2:1': CapitalSmall,
  '3:2': CapitalMedium,
  '4:2': CapitalLarge,
  '6:2': CapitalLargest,
};


const wrapMap = {
  preview: PreviewWrap,
  editable: Editable,
  link: StyledLink,
};

const resolveWrapProps = (props) => {
  const { onBlockEditStart, onBlockDeleteStart, data, ...otherProps } = props; // eslint-disable-line
  if (props.type === 'link') {
    return {
      to: `capitals/${data.id}`,
      ...otherProps,
    };
  } else if (props.type === 'editable') {
    return props;
  }
  return otherProps;
};

function Capital(props) {
  const { w, h } = props['data-grid'];
  const Component = capitalMap[`${w}:${h}`];
  const Wrap = wrapMap[props.type] || wrapMap.link;
  const wrapProps = resolveWrapProps(props);
  return (
    <Wrap
      {...wrapProps}
    >
      <Component preview={props.type === 'preview'} {...props.data} />
    </Wrap>
  );
}

Capital.propTypes = {
  'data-grid': React.PropTypes.object.isRequired,
  type: React.PropTypes.string.isRequired,
  data: React.PropTypes.object.isRequired,
};

export default Capital;

