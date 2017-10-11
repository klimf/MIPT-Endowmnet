import { createSelector } from 'reselect';

/**
 * Direct selector to the genericPage state domain
 */
const selectGenericPageDomain = () => (state) => state.get('genericPage');
const selectCurrentPage = () => (state) => state.get('genericPage').get('currentPage');
const selectPagesTree = () => (state) => state.get('genericPage').get('tree');
/**
 * Other specific selectors
 */


/**
 * Default selector used by GenericPage
 */

const makeSelectGenericPage = () => createSelector(
  selectGenericPageDomain(),
  (substate) => substate.toJS()
);

const makeSelectCurrentPage = () => createSelector(
  selectCurrentPage(),
  selectPagesTree(),
  (pageState, treeState) => {
    const page = pageState.toJS().data;
    const tree = treeState.toJS().data;

    if (!page || !tree) {
      return {};
    }
    const stack = [];
    let node;
    let ii;
    stack.push(tree);
    while (stack.length > 0) {
      node = stack.pop();
      if (node.pageName === page.url) {
        break;
      } else if (node.nodes && node.nodes.length) {
        for (ii = 0; ii < node.nodes.length; ii += 1) {
          stack.push(node.nodes[ii]);
        }
      }
    }
    const normalizedNodees = node ? node.nodes.map((x) => Object.assign({}, x, { nodes: null })) : null;
    console.log(tree);
    return Object.assign({}, page, { nodes: normalizedNodees });
  }
);


export default makeSelectGenericPage;
export {
  selectGenericPageDomain,
  makeSelectCurrentPage,
};

