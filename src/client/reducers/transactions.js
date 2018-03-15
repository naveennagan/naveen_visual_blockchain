var get = require('lodash.get');

export default (state = { transactions: [] }, action = { type: "" }) => {
  switch (action.type) {
    case 'TRANSACTIONS_FETCHING':
      return state;
    case 'TRANSACTIONS_FETCH_SUCCESS':
      var transactions = get(action, 'transactions');
      return { transactions };
    case 'TRANSACTIONS_FETCH_ERROR':
      return state
    default:
      return state
  }
}