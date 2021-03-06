// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};


export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer.js'),
          import('containers/HomePage/sagas.js'),

          import('containers/StoriesPage/reducer'),
          import('containers/StoriesPage/sagas'),

          import('containers/NewsPage/reducer'),
          import('containers/NewsPage/sagas'),

          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([
          reducer,
          sagas,
          storiesReducer,
          storiesSagas,
          newsReducer,
          newsSagas,
          component]) => {
          injectReducer('homePage', reducer.default);
          injectReducer('storiesPage', storiesReducer.default);
          injectReducer('newsPage', newsReducer.default);
          injectSagas(storiesSagas.default);
          injectSagas(newsSagas.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/capitals',
      name: 'capitalsPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/CapitalsPage/reducer'),
          import('containers/CapitalsPage/sagas'),
          import('containers/CapitalsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('capitalsPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/sign-in',
      name: 'signIn',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/SignIn/reducer'),
          import('containers/SignIn/sagas'),
          import('containers/SignIn'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('signIn', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/donate',
      name: 'donationPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/DonationPage/reducer'),
          import('containers/DonationPage/sagas'),
          import('containers/DonationPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('donationPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/admin',
      name: 'adminPanel',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/AdminPanel/reducer'),
          import('containers/AdminPanel/sagas'),
          import('containers/AdminPanel'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('adminPanel', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/stories',
      name: 'storiesPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/StoriesPage/reducer'),
          import('containers/StoriesPage/sagas'),
          import('containers/StoriesPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('storiesPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/news',
      name: 'newsPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/NewsPage/reducer'),
          import('containers/NewsPage/sagas'),
          import('containers/NewsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('newsPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/news(/:id)',
      name: 'newsPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/NewsItemPage/reducer'),
          import('containers/NewsItemPage/sagas'),
          import('containers/NewsItemPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('newsItemPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/about',
      name: 'aboutPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/AboutPage/reducer'),
          import('containers/AboutPage/sagas'),
          import('containers/AboutPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('aboutPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/capitals(/:capitalName)',
      name: 'capitalPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/CapitalPage/reducer'),
          import('containers/CapitalPage/sagas'),
          import('containers/CapitalPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('capitalPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/stories(/:id)',
      name: 'storyPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/StoryPage/reducer'),
          import('containers/StoryPage/sagas'),
          import('containers/StoryPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('storyPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/achievements',
      name: 'achievementsPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/AchievementsPage/reducer'),
          import('containers/AchievementsPage/sagas'),
          import('containers/AchievementsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('achievementsPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/sponsors',
      name: 'sponsorsPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/SponsorsPage/reducer'),
          import('containers/SponsorsPage/sagas'),
          import('containers/SponsorsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('sponsorsPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/companies',
      name: 'companiesPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/CompaniesPage/reducer'),
          import('containers/CompaniesPage/sagas'),
          import('containers/CompaniesPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('companiesPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/newsitem',
      name: 'newsItemPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/NewsItemPage/reducer'),
          import('containers/NewsItemPage/sagas'),
          import('containers/NewsItemPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('newsItemPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/forbidden',
      name: 'forbiddenPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ForbiddenPage/reducer'),
          import('containers/ForbiddenPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('forbiddenPage', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/p/*',
      name: 'genericPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/GenericPage/reducer'),
          import('containers/GenericPage/sagas'),
          import('containers/GenericPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('genericPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/NotFoundPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
  ];
}
