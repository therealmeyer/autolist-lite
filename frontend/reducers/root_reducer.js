import { combineReducers } from 'redux';
import carViewsReducer from './car_views_reducer';
import searchReducer from './search_reducer';
import currentCarReducer from './current_car_reducer';

const rootReducer = combineReducers({
  views: carViewsReducer,
  search: searchReducer,
  currentCar: currentCarReducer
});

export default rootReducer;
