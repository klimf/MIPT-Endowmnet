import { createSelector } from 'reselect';

/**
 * Direct selector to the capitalsPage state domain
 */
const selectCapitalsPageDomain = () => (state) => state.get('capitalsPage');
const capitalsDataItems = () => (state) => state.get('capitalsPage').get('capitals');
const capitalsGridItems = () => (state) => state.get('capitalsPage').get('capitalsGrid').get('grid');
const currentPopup = () => (state) => state.get('capitalsPage').get('capitalsGrid').get('popup');

/**
 * Other specific selectors
 */

const makeSelectCapitalsGrid = () => createSelector(
  capitalsDataItems(),
  capitalsGridItems(),
  (dataItemsState, gridItemsState) => {
    if (!dataItemsState.get('data')) {
      return [];
    }
    const dataItems = dataItemsState.get('data').toJS();
    const gridItems = gridItemsState.toJS();

    return gridItems.map((gridParams) => ({
      'data-grid': gridParams,
      data: dataItems.find((x) => x.id === gridParams.id),
    }));
  }
);

const makeSelectCurrentPopup = (popupName) => createSelector(
  currentPopup(),
  (substate) => substate === popupName
);

const notAddedCapitals = () => createSelector(
  capitalsDataItems(),
  capitalsGridItems(),
  (dataItemsState, gridItemsState) => {
    if (!dataItemsState.get('data')) {
      return [];
    }
    const dataItems = dataItemsState.get('data').toJS();
    const gridItems = gridItemsState.toJS();
    return dataItems.filter((item) => !gridItems.find((x) => x.id === item.id));
  }
);

/**
 * Default selector used by CapitalsPage
 */

const makeSelectCapitalsPage = () => createSelector(
  selectCapitalsPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCapitalsPage;
export {
  selectCapitalsPageDomain,
  makeSelectCapitalsGrid,
  makeSelectCurrentPopup,
  notAddedCapitals,
};
