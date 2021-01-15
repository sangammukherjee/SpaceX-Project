import { put, takeEvery, all, call } from 'redux-saga/effects';
import { dataFetchedCompleted, fetchedData, fetchingData } from './actions';
import { INIT_FETCH_GET_DATA } from './constants';
import axios from 'axios';

export default function* rootSaga() {
  yield all([yield takeEvery(INIT_FETCH_GET_DATA, fetchDataSaga)]);
}

function* fetchDataSaga(action) {
  let url = 'https://api.spacexdata.com/v3/launches?limit=100';
  let filteredKeys = [];
  filteredKeys = Object.keys(action.filterData);

  filteredKeys &&
    filteredKeys.length > 0 &&
    filteredKeys.forEach((key) => {
      url = `${url}&${key}=${action.filterData[key]}`;
    });

  yield put(fetchingData());

  try {
    const response = yield call(axios.get, url);
    if (response && response.status) {
      yield put(fetchedData(response.data));
    }
    yield put(dataFetchedCompleted());
  } catch (error) {
    console.log(error);
  }
}
