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
  fetching: false,
  payload: [],
  error: null
});

/* ------------- Selectors ------------- */

const getState = state => state.rocketseat;

export const RocketSeatSelectors = {
  getData: state => getState(state).data,
  getPayload: state => getState(state).payload
};

/* ------------- Reducers ------------- */

export const request = state => state.merge({ fetching: true });

export const success = (state, action) => {
  const retorno = action.payload;
  return state.merge({
    fetching: false,
    error: null,
    payload: retorno.docs
  });
};

export const failure = state => state.merge({ fetching: false, error: true });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ROCKET_SEAT_REQUEST]: request,
  [Types.ROCKET_SEAT_SUCCESS]: success,
  [Types.ROCKET_SEAT_FAILURE]: failure
});
