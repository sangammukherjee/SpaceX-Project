import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { Div } from '../../components/Div';
import Header from '../Header';
import Filter from '../Filter';
import DetailsView from '../DetailsView';
import { initFetchGetData } from '../store/actions';

class Main extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    console.log(this.props);

    return (
      <Div>
        <Header />
        <Filter />
        <DetailsView />
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
    getData: () => {
      dispatch(initFetchGetData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
