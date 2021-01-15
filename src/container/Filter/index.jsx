import React, { Component, Fragment } from 'react';
import { Button } from '../../components/button';
import { Div } from '../../components/Div';
import { H1 } from '../../components/H1';
import { P } from '../../components/P';

class Filter extends Component {
  render() {
    return (
      <Div
        lgWidth='15%'
        smWidth='20%'
        lgPadding='10px'
        bgColor='#ffffff'
        lgMargin='0 20px 0 10px'
      >
        <Div display='flex' margin='0 0 10px 0'>
          <H1 margin='0' xsFontSize='15px' flex='1'>
            Filters
          </H1>
          <Button
            padding='6px 16px 6px 16px'
            cursor='pointer'
            bgColor='#90ee90'
            color='#000'
            border='none'
            margin='0'
            borderRadius='4px'
            onClick={this.props.handleResetFilters}
          >
            Clear
          </Button>
        </Div>

        <Div>
          <P
            margin='0 auto'
            borderBottom='1px solid #dddddd'
            display='flex'
            padding='0 0 6px 0'
            justifyContent='center'
            width='60%'
          >
            Launch Year
          </P>
          <Div display='flex' flexWrap='wrap' justifyContent='center'>
            {this.props.filterOptionsData
              ? this.props.filterOptionsData.launch_year_data_array.map(
                  (item) => {
                    return (
                      <Button
                        padding='6px 16px 6px 16px'
                        cursor='pointer'
                        color='#000'
                        border='none'
                        margin='7px'
                        borderRadius='4px'
                        onClick={(event) => {
                          this.props.handleFilter(
                            event,
                            item.value,
                            'launch_year',
                            item.id
                          );
                          this.props.selectedYear(item.id);
                        }}
                        selected={this.props.selectedYearValue === item.id}
                      >
                        {item.displayName}
                      </Button>
                    );
                  }
                )
              : null}
          </Div>
        </Div>
        <Div margin='20px 0 0 0'>
          <P
            margin='0 auto'
            borderBottom='1px solid #dddddd'
            display='flex'
            padding='0 0 6px 0'
            justifyContent='center'
            width='70%'
          >
            Successful Launch
          </P>
          <Div display='flex' flexWrap='wrap' justifyContent='center'>
            {this.props.filterOptionsData
              ? this.props.filterOptionsData.launch_success_data_array.map(
                  (item) => {
                    return (
                      <Button
                        padding='6px 16px 6px 16px'
                        cursor='pointer'
                        color='#000'
                        border='none'
                        margin='7px'
                        borderRadius='4px'
                   
                        onClick={(event) => {
                          this.props.handleFilter(
                            event,
                            item.value,
                            'launch_success',
                            item.id
                          );
                          this.props.selectedLaunchSuccess(item.id);
                        }}
                        selected={this.props.selectedLaunchSuccessValue === item.id}

                      >
                        {item.displayName}
                      </Button>
                    );
                  }
                )
              : null}
          </Div>
        </Div>
        <Div margin='20px 0 0 0'>
          <P
            margin='0 auto'
            borderBottom='1px solid #dddddd'
            display='flex'
            padding='0 0 6px 0'
            justifyContent='center'
            width='70%'
          >
            Successful Landing
          </P>
          <Div display='flex' flexWrap='wrap' justifyContent='center'>
            {this.props.filterOptionsData
              ? this.props.filterOptionsData.launch_landed_data_array.map(
                  (item) => {
                    return (
                      <Button
                        padding='6px 16px 6px 16px'
                        cursor='pointer'
                        color='#000'
                        border='none'
                        margin='7px'
                        borderRadius='4px'
                        selected={
                          this.props.selectedLandedSuccessValue === item.id
                        }
                        onClick={(event) => {
                          this.props.handleFilter(
                            event,
                            item.value,
                            'launch_landed',
                            item.id
                          );
                          this.props.selectedLandedSuccess(item.id);
                        }}
                      >
                        {item.displayName}
                      </Button>
                    );
                  }
                )
              : null}
          </Div>
        </Div>
      </Div>
    );
  }
}

export default Filter;
