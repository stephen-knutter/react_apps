import {REQUEST_TICKETS, RECIEVE_TICKETS} from '../constants';

const tickets = (state = [], action) => {
  switch(action.type) {
    case REQUEST_TICKETS:
      return [];

    case RECIEVE_TICKETS:
      return action.tickets;

    default:
      return state;
  }
};

export default tickets;
