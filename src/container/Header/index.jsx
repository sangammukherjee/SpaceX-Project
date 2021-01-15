import React, { Component } from 'react';
import { H1 } from '../../components/H1';

class Header extends Component {
  render() {
    return (
      <H1 margin='0' xsFontSize='28px' xsPadding='0 0px 10px 10px'>
        SpaceX Launch Programs
      </H1>
    );
  }
}

export default Header;
