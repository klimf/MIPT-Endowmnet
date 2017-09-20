import { createSelector } from 'reselect';

/**
 * Direct selector to the donationPage state domain
 */
const selectDonationPageDomain = () => (state) => state.get('donationPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DonationPage
 */

const makeSelectDonationPage = () => createSelector(
  selectDonationPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectDonationPage;
export {
  selectDonationPageDomain,
};
