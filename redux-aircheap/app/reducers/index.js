import {combineReducers} from 'redux';
import airports from './airports';
import tickets from './tickets';
import route from './route';

const rootReducer = combineReducers({
  airports,
  tickets,
  route
})

export default rootReducer;
