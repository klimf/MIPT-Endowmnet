import decorateComponentWithProps from 'decorate-component-with-props';
import Sidebar from './Bar';
import createStore from './createStore';


import DefaultBlockTypeSelect from './DefaultBlockTypeSelect';
import getModalByType from './getModalType';

export default (config = {}) => {
  const defaultTheme = { };

  const store = createStore({
    isVisible: false,
  });

  const {
    theme = defaultTheme,
    structure = [
      DefaultBlockTypeSelect,
    ],
  } = config;

  const sidebarProps = {
    store,
    structure,
    getModalByType,
    theme,
  };

  return {
    initialize: ({ setEditorState, getEditorState, getEditorRef }) => {
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
      store.updateItem('getEditorRef', getEditorRef);
    },
    // Re-Render the sidebar on every change
    onChange: (editorState) => {
      store.updateItem('editorState', editorState);
      return editorState;
    },
    Sidebar: decorateComponentWithProps(Sidebar, sidebarProps),
  };
};
