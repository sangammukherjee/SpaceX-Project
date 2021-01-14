import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { Div } from '../../components/Div';
import Header from '../Header';
import Filter from '../Filter';
import DetailsView from '../DetailsView';
import { initFetchGetData } from '../store/actions';

class Main extends Component {
  state = {
    filterData: {},
  };
  componentDidMount() {
    this.props.getData();
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
  render() {
    console.log(this.state.filterData);

    let getUniqueLaunchYearData = this.props.fetchedData &&
      this.props.fetchedData.length > 0 && [
        ...new Set(
          this.props.fetchedData.map((item) => parseInt(item.launch_year))
        ),
      ];
    let getUniqueLaunchSuccessdata = this.props.fetchedData &&
      this.props.fetchedData.length > 0 && [
        ...new Set(this.props.fetchedData.map((item) => item.launch_success)),
      ];

    return (
      <Div bgColor='#eeeeee' padding='10px'>
        <Header />
        <Div lgDisplay='flex' smDisplay='flex'>
          <Filter
            getUniqueLaunchYearData={getUniqueLaunchYearData}
            getUniqueLaunchSuccessdata={getUniqueLaunchSuccessdata}
            handleFilter={this.handleFilter}
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
});
const mapDispatchToProps = (dispatch) => {
  return {
    getData: (filterData) => {
      dispatch(initFetchGetData(filterData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
