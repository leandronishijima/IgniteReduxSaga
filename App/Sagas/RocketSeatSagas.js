import { call, put } from 'redux-saga/effects';
import RocketSeatActions from '../Redux/RocketSeatRedux';

export function* getRocketSeat(api) {
  const response = yield call(api.getProducts);

  if (response.ok) {
    yield put(RocketSeatActions.rocketSeatSuccess(response.data));
  } else {
    yield put(RocketSeatActions.rocketSeatFailure());
  }
}
