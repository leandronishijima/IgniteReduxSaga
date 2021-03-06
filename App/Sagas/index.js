import { takeLatest, all } from 'redux-saga/effects';
import API from '../Services/Api';
import RocketSeatApi from '../Services/RocketSeatApi';
import FixtureAPI from '../Services/FixtureApi';
import DebugConfig from '../Config/DebugConfig';

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux';
import { GithubTypes } from '../Redux/GithubRedux';
import { RocketSeatTypes } from '../Redux/RocketSeatRedux';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';
import { getUserAvatar } from './GithubSagas';
import { getRocketSeat } from './RocketSeatSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create();
const rocketApi = RocketSeatApi.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(RocketSeatTypes.ROCKET_SEAT_REQUEST, getRocketSeat, rocketApi),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
  ]);
}
