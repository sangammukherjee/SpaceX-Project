import {
  DATA_FETCHED_COMPLETED,
  FETCHING_DATA,
  FETCHED_DATA,
  INIT_FETCH_GET_DATA,
} from './constants';

export const initFetchGetData = (filterData) => {
  return {
    type: INIT_FETCH_GET_DATA,
    filterData
  };
};
export const fetchingData = () => {
  return {
    type: FETCHING_DATA,
  };
};
export const fetchedData = (data) => {
  return {
    type: FETCHED_DATA,
    data,
  };
};
export const dataFetchedCompleted = () => {
  return {
    type: DATA_FETCHED_COMPLETED,
  };
};
