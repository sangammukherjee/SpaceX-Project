import {
  DATA_FETCHED_COMPLETED,
  FETCHING_DATA,
  FETCHED_DATA,
  INIT_FETCH_GET_DATA,
  SELECTED_LANDED_SUCCESS_ACTION,
  SELECTED_YEAR_ACTION,
  SELECTED_LAUNCH_SUCCESS_ACTION
} from './constants';

export const initFetchGetData = (filterData) => {
  console.log(filterData);

  return {
    type: INIT_FETCH_GET_DATA,
    filterData,
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
export const selectedYearAction = (id) => {
  return {
    type: SELECTED_YEAR_ACTION,
    id
  };
};
export const selectedLaunchSuccessAction = (id) => {
  return {
    type: SELECTED_LAUNCH_SUCCESS_ACTION,
    id
  };
};
export const selectedLandedSuccessAction = (id) => {
  return {
    type: SELECTED_LANDED_SUCCESS_ACTION,
    id
  };
};
