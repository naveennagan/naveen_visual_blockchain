let get = require('lodash.get');

export default (state = { blocks: [] }, action = { type: "" }) => {
  switch (action.type) {
    case 'ADD_BLOCK':
      var block = get(action, 'data');
      var prevBlocks = get(state, 'blocks');
      var newBlocks = prevBlocks.concat(block);
      return { blocks: newBlocks };
    default:
      return state
  }
}