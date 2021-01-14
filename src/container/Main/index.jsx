import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { Div } from '../../components/Div';
import Header from '../Header';
import Filter from '../Filter';
import DetailsView from '../DetailsView';
import { createStructuredSelector } from 'reselect';
import { initFetchGetData } from '../store/actions';
import { SelectFetchedData, SelectIsDatafetching } from '../store/selector';
import { compose } from 'redux';
class Main extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    console.log(this.props.isDataFetching);

    return (
      <Div>
        <Header />
        <Filter />
        <DetailsView />
      </Div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  isDataFetching: SelectIsDatafetching(),
  fetchedData: SelectFetchedData(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      dispatch(initFetchGetData());
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps)(Main));
