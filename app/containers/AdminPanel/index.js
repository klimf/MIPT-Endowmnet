/*
 *
 * AdminPanel
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Admin, Resource, Delete } from 'admin-on-rest';
import { createStructuredSelector } from 'reselect';
import CapitalsIcon from 'material-ui/svg-icons/action/view-quilt';
import OptionsIcon from 'material-ui/svg-icons/action/info';
import PagesIcon from 'material-ui/svg-icons/action/description';
import NewsIcon from 'material-ui/svg-icons/action/date-range';

import theme from './theme';
import messages, { aorMessagesRu } from './messages';
import makeSelectAdminPanel from './selectors';
import * as CapitalResource from './resources/capitals/index';
import * as NavigationResource from './resources/navigation';
import * as NewsResource from './resources/news';
import * as OptionsResource from './resources/options';
import * as PagesResource from './resources/pages';
import * as StoriesResource from './resources/stories';
import optionsRestDecorator from './resources/options/restClientDecorator';
import pagesRestClientDecorator from './resources/pages/pagesRestClientDecorator';
import editorRestDecorator from './Editor/restClientDecorator';
import uploadDecorator from './restClient/uploadDecorator';
import restClient, { compose } from './restClient';
import { makeSelectUserPermissions } from '../AuthProvider/selectors';
import { ADMIN_ROLE } from '../AuthProvider/constants';
import editorReducer from './Editor/reducer';
import pagesRoutes from './resources/pages/route';

const decoratedRestClient = compose([
  optionsRestDecorator,
  editorRestDecorator,
  pagesRestClientDecorator,
  uploadDecorator,
])(restClient);

const aorMessages = {
  ru: aorMessagesRu,
};

const routes = [].concat(pagesRoutes);

export class AdminPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount = () => {
    setTimeout(() => {
      if (!this.props.isAdmin) {
        this.props.router.replace('/forbidden');
      }
    }, 2000);
  }


  render() {
    return this.props.isAdmin && (
      <div>
        <Helmet
          title={messages.header.defaultMessage}
        />
        <Admin
          customReducers={{ editor: editorReducer }}
          title={messages.header.defaultMessage}
          locale="ru"
          messages={aorMessages}
          theme={theme}
          restClient={decoratedRestClient}
          customRoutes={routes}
        >
          <Resource
            name="capitals"
            icon={CapitalsIcon}
            options={{ label: messages.capitalsLabel.defaultMessage }}
            list={CapitalResource.CapitalsList}
            edit={CapitalResource.CapitalsEdit}
            create={CapitalResource.CapitalsCreate}
            remove={Delete}
          />
          <Resource
            name="stories"
            icon={NewsIcon}
            options={{ label: 'Истории' }}
            list={StoriesResource.StoriesList}
            edit={StoriesResource.StoriesEdit}
            create={StoriesResource.StoriesCreate}
            remove={Delete}
          />
          <Resource
            name="navigation-layout"
            options={{ label: messages.navigationLabel.defaultMessage }}
            list={NavigationResource.NavigationList}
            edit={NavigationResource.NavigationEdit}
            create={NavigationResource.NavigationCreate}
            remove={Delete}
          />
          <Resource
            name="news"
            icon={NewsIcon}
            options={{ label: messages.newsLabel.defaultMessage }}
            list={NewsResource.NewsList}
            edit={NewsResource.NewsEdit}
            create={NewsResource.NewsCreate}
            remove={Delete}
          />
          <Resource
            name="domainOptions"
            icon={OptionsIcon}
            options={{ label: messages.optionsLabel.defaultMessage }}
            list={OptionsResource.OptionsList}
            edit={OptionsResource.OptionsEdit}
          />
          <Resource
            name="pages"
            icon={PagesIcon}
            options={{ label: messages.pagesLabel.defaultMessage }}
            list={PagesResource.PagesList}
            edit={PagesResource.PagesEdit}
            create={PagesResource.PagesCreate}
            remove={Delete}
          />
        </Admin>
      </div>
    );
  }
}

AdminPanel.propTypes = {
  isAdmin: PropTypes.bool,
  router: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  AdminPanel: makeSelectAdminPanel(),
  isAdmin: makeSelectUserPermissions(ADMIN_ROLE),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
