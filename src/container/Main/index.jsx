import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Div } from '../../components/Div';
import Header from '../Header';
import Filter from '../Filter';
import DetailsView from '../DetailsView';
import {
  selectedLandedSuccessAction,
  initFetchGetData,
  selectedYearAction,
  selectedLaunchSuccessAction,
} from '../store/actions';
import { filterOptionsData } from './config/index';
class Main extends Component {
  state = {
    filterData: {},
  };
  componentDidMount() {
    this.props.getData({});
  }
  handleFilter = (event, item, filterType) => {
    let { filterData } = this.state;
    let updateFilterData = Object.assign(filterData, { [filterType]: item });
    this.setState((prevstate) => ({
      ...prevstate.filterData,
      filterData: updateFilterData,
    }));
    this.props.getData(updateFilterData);
  };
  handleResetFilters = () => {
    this.setState({
      filterData: {},
    });
    this.props.getData({});
    this.props.selectedYear('');
    this.props.selectedLaunchSuccess('');
    this.props.selectedLandedSuccess('');
  };
  handleiIsClearButtonDisable = () => {
    return (
      this.state.filterData && Object.keys(this.state.filterData).length > 0
    );
  };
  render() {
    let isClearButtonDisable = !this.handleiIsClearButtonDisable();
    return (
      <Div bgColor='#eeeeee' padding='10px'>
        <Header />
        <Div lgDisplay='flex' smDisplay='flex'>
          <Filter
            filterOptionsData={filterOptionsData}
            handleFilter={this.handleFilter}
            handleResetFilters={this.handleResetFilters}
            selectedYear={this.props.selectedYear}
            selectedYearValue={this.props.selectedYearValue}
            selectedLaunchSuccess={this.props.selectedLaunchSuccess}
            selectedLaunchSuccessValue={this.props.selectedLaunchSuccessValue}
            selectedLandedSuccess={this.props.selectedLandedSuccess}
            selectedLandedSuccessValue={this.props.selectedLandedSuccessValue}
            isClearButtonDisable={isClearButtonDisable}
          />
          <DetailsView
            fetchedData={this.props.fetchedData}
            isDataFetching={this.props.isDataFetching}
          />
        </Div>
      </Div>
    );
  }
}

const mapStateToProps = (state) => ({
  isDataFetching: state.isDataFetching,
  fetchedData: state.fetchedData,
  selectedYearValue: state.selectedYear,
  selectedLaunchSuccessValue: state.selectedLaunchSuccess,

  selectedLandedSuccessValue: state.selectedLandedSuccess,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getData: (filterData) => {
      dispatch(initFetchGetData(filterData));
    },
    selectedYear: (id) => {
      dispatch(selectedYearAction(id));
    },
    selectedLaunchSuccess: (id) => {
      dispatch(selectedLaunchSuccessAction(id));
    },
    selectedLandedSuccess: (id) => {
      dispatch(selectedLandedSuccessAction(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
