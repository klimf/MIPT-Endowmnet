import React from 'react';
import styled from 'styled-components';
import {
  AddImageButton,
  AddEmbedButton,
} from 'draft-js-buttons-plugin';

import BlockTypeSelect from './BlockTypeSelect';

const DefaultBlockTypeSelect = ({ getEditorState, setEditorState, store, openModal, closeModal }) => (
  <BlockTypeSelect
    getEditorState={getEditorState}
    setEditorState={setEditorState}
    store={store}
    openModal={openModal}
    closeModal={closeModal}
    structure={[
      AddImageButton,
      AddEmbedButton,
    ]}
  />
);

export default DefaultBlockTypeSelect;
