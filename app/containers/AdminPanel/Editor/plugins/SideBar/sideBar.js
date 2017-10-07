import createSidebarPlugin from 'last-draft-js-sidebar-plugin';
import styled from 'styled-components';

const sidebarPlugin = createSidebarPlugin();


const modalWrapper = styled.div`
  white-space: nowrap;
  background: #fff;
  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.3);
`;

const modalInput = styled.input`
 background-color: transparent;
  border: none;
  color: #181818 !important;
  font-size: 15px;
  height: auto;
  line-height: 1.2;
  margin: 0;
  padding: 16px;
  width: 270px;
`;

const modalButton = styled.button`
  padding: 0;
  cursor: pointer;
  border: 0;
  height: 46px;
  width: 46px;
  background: transparent;
  padding-right: 16px;
  color: #ccc;
`;

const modalButtonWrapper = styled.div`
  display: inline - block;
  vertical-align: bottom;
`;
