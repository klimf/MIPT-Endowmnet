import { createSelector } from 'reselect';

/**
 * Direct selector to the capitalsPage state domain
 */
const selectCapitalsPageDomain = () => (state) => state.get('capitalsPage');
const capitalsDataItems = () => (state) => state.get('capitals');
const capitalsGridItems = () => (state) => state.get('capitalsGrid').get('grid');

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
    const gridItems = gridItemsState.get('data').toJS();
    return gridItems.map((gridParams) => ({
      'data-grid': gridParams,
      data: dataItems.find((x) => x.id === gridParams.id),
    }));
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
};
