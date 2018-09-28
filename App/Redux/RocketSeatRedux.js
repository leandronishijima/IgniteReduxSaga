import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  rocketSeatRequest: null,
  rocketSeatSuccess: ['payload'],
  rocketSeatFailure: null
});

export const RocketSeatTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null
});

/* ------------- Selectors ------------- */

export const RocketSeatSelectors = {
  getData: state => state.rocketseat.data,
  getPayload: state => state.rocketseat.payload
};

/* ------------- Reducers ------------- */

// request the data from an api
export const request = state => state.merge({ fetching: true, payload: null });

// successful api lookup
export const success = (state, action) => {
  const retorno = action.payload;
  return state.merge({ fetching: false, error: null, payload: retorno.docs });
};

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ROCKET_SEAT_REQUEST]: request,
  [Types.ROCKET_SEAT_SUCCESS]: success,
  [Types.ROCKET_SEAT_FAILURE]: failure
});
