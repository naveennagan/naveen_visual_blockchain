import { combineReducers } from 'redux';
import blocks from './blocks';
import transactions from './transactions';

const rootReducer = combineReducers({
  blocks,
  transactions
})

export default rootReducer;