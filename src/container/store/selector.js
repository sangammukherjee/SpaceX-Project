import { createSelector } from 'reselect';
import { initialState } from './reducer';

const SelectData = (state) => state.get('', initialState);
console.log(SelectData);

export const SelectIsDatafetching = () =>
  createSelector(SelectData, (VPState) => VPState.get('isDataFetching'));

export const SelectFetchedData = () =>
  createSelector(SelectData, (VPState) => VPState.get('fetchedData'));
