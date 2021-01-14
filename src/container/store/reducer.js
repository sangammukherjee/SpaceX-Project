import { fromJS } from 'immutable';
import {
  DATA_FETCHED_COMPLETED,
  FETCHED_DATA,
  FETCHING_DATA,
} from './constants';
export const initialState = fromJS({
  isDataFetching: false,
  fetchedData: [],
});
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return { ...state, isDataFetching: true };
    case FETCHED_DATA:
      return { ...state, fetchedData: action.data };
    case DATA_FETCHED_COMPLETED:
      return { ...state, isDataFetching: false };
    default:
      return state;
  }
};
export default reducer;
