import { connect } from 'react-redux';
import DashBoard from '../components/DashBoard.jsx';
let get = require('lodash.get');


const mapStateToProps = (state) => {
  return {
    blocks: get(state, 'blocks') || []
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
    }
  }
}
const DashBoardView = connect(mapStateToProps, mapDispatchToProps)(DashBoard);
export default DashBoardView;