import {
  RECEIVE_RANGE
} from '../actions/range_actions';

const rangeReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RANGE:
      return action.range;
    default:
      return state;
  }
};

export default rangeReducer;