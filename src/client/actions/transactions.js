const transactionURL = "/blockchain/transactions";
var get = require('lodash.get');

function fetchTransactions() {
  return fetch(transactionURL, { method: 'GET' })
    .then(response => Promise.all([response, response.json()]));
}

export function fetchTransactionsAction() {
  return (dispatch) => {

    let fetchingTransaction = {
      type: 'TRANSACTIONS_FETCHING'
    };

    dispatch(fetchingTransaction);

    fetchTransactions().then((response) => {
      let fetchTransactionSuccess = {
        type: 'TRANSACTIONS_FETCH_SUCCESS',
        transactions: response[1] || []
      };
      dispatch(fetchTransactionSuccess);
    }, (err) => {
      let fetchTransactionFailure = {
        type: 'TRANSACTIONS_FETCH_ERROR'
      };
      dispatch(fetchTransactionFailure);
    })
  }
}