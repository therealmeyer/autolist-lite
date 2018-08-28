import { RECEIVE_VIEWS, RECEIVE_VIEW } from '../actions/views_actions';
import merge from 'lodash/merge';

const carViewsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_VIEWS:
      return merge({}, action.views);
    case RECEIVE_VIEW:
      newState[action.view.vin] = action.view;
      return newState;
    default: return state;
  }
};

export default carViewsReducer;