import {RECIEVE_AIRPORTS} from '../constants';

const airports = (state = [], action) => {
  switch(action.type) {
    case RECIEVE_AIRPORTS:
      return action.airports;
    default:
      return state;
  }
};

export default airports;
