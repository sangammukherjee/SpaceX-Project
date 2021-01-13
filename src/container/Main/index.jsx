import React, { Component, Fragment } from 'react';
import { Div } from '../../components/Div';
import Header from '../Header';
import Filter from '../Filter';
import DetailsView from '../DetailsView';
class Main extends Component {
  render() {
    return (
      <Div>
        <Header />
        <Filter />
        <DetailsView />
      </Div>
    );
  }
}

export default Main;
