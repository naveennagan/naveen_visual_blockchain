import { connect } from 'react-redux';
import DashBoard from '../components/DashBoard.jsx';
let get = require('lodash.get');
import { fetchTransactionsAction } from '../actions/transactions'


const mapStateToProps = (state) => {
  return {
    blocks: get(state, 'blocks.blocks') || [],
    transactions: get(state, 'transactions.transactions') || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBlock: (block) => {
      let addBlockAction = {
        type: "ADD_BLOCK",
        data: block
      }
      dispatch(addBlockAction);
    },
    getTransactions: () => {
      dispatch(fetchTransactionsAction());
    }
  }
}
const DashBoardView = connect(mapStateToProps, mapDispatchToProps)(DashBoard);
export default DashBoardView;