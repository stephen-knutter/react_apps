import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {ReduceStore} from 'flux/utils';

class RouteStore extends ReduceStore {
  getInitialState() {
    return {
      origin: null,
      destination: null,
      code: null,
    };
  }
  reduce(state, action){
    switch (action.type) {
      case constants.CHOOSE_AIRPORT:
        // action.target can be either “origin” or “destination”
        // action.code contains the selected airport code
        if (action.target === 'origin') {
          state.origin = action.code;
        } else if (action.target === 'destination') {
          state.destination = action.code;
        }
        state.code = action.code;
        return {origin: state.origin, destination: state.destination, code: state.code};

      default:
        return state;
    }
  }
}
export default new RouteStore(AppDispatcher);
