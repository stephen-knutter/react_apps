import {REQUEST_AIRPORTS,
        RECIEVE_AIRPORTS,
        CHOOSE_AIRPORT,
        REQUEST_TICKETS,
        RECIEVE_TICKETS} from '../constants';
import AirCheapAPI from '../api/AirCheapAPI';

let AirportActionCreators = {
  fetchAirports(origin, destination) {
    return (dispatch) => {
      dispatch({type: REQUEST_AIRPORTS});

      AirCheapAPI.fetchAirports().then(
        (airports) => dispatch({type: RECIEVE_AIRPORTS, success: true, airports}),
        (error) => dispatch({type: RECIEVE_AIRPORTS, success: false})
      );
    };
  },

  chooseAirport(target, airport) {
    return {
        type: CHOOSE_AIRPORT,
        target: target,
        code: airport? airport.value : ''
    }
  },

  fetchTickets(origin, destination) {
    return (dispatch) => {
      dispatch({type: REQUEST_TICKETS});

      AirCheapAPI.fetchTickets(origin, destination).then(
        (tickets) => dispatch({type: RECIEVE_TICKETS, success: true, tickets}),
        (error) => dispatch({type: RECIEVE_TICKETS, success: false})
      );
    }
  }
};

export default AirportActionCreators;
