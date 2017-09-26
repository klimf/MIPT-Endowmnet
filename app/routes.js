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
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
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
      path: '/capital(/:capitalName)',
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
