import { RECEIVE_CAR } from '../actions/current_car_actions';

const currentCarReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAR:
      return action.car;
    default: return state;
  }
};

export default currentCarReducer;