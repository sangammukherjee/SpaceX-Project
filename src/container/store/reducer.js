import { fromJS } from 'immutable';
import {
  DATA_FETCHED_COMPLETED,
  FETCHED_DATA,
  FETCHING_DATA,
  SELECTED_LANDED_SUCCESS_ACTION,
  SELECTED_LAUNCH_SUCCESS_ACTION,
  SELECTED_YEAR_ACTION,
} from './constants';
export const initialState = fromJS({
  isDataFetching: false,
  fetchedData: [],
  selectedYear : "",
  selectedLaunchSuccess:"",
  selectedLandedSuccess : ""
});
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return { ...state, isDataFetching: true };
    case FETCHED_DATA:
      return { ...state, fetchedData: action.data };
    case DATA_FETCHED_COMPLETED:
      return { ...state, isDataFetching: false };
      case SELECTED_YEAR_ACTION:
      return { ...state, selectedYear: action.id };
      case SELECTED_LAUNCH_SUCCESS_ACTION:
        return { ...state, selectedLaunchSuccess: action.id };
      case SELECTED_LANDED_SUCCESS_ACTION:
        return { ...state, selectedLandedSuccess: action.id };
    default:
      return state;
  }
};
export default reducer;
