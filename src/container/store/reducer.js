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
      return state.set('isDataFetching', true);
    case FETCHED_DATA:
      return state.set('fetchedData', action.data);
    case DATA_FETCHED_COMPLETED:
      return state.set('isDataFetching', false);
    default:
      return state;
  }
};
export default reducer;
