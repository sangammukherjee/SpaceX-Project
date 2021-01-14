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
        <H1 margin='0' xsFontSize='15px'>
          Filters
        </H1>
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
            {this.props.getUniqueLaunchYearData &&
            this.props.getUniqueLaunchYearData.length > 0
              ? this.props.getUniqueLaunchYearData.map((item) => {
                  return (
                    <Button
                      padding='6px 16px 6px 16px'
                      cursor='pointer'
                      bgColor='#90ee90'
                      color='#000'
                      border='none'
                      margin='7px'
                      borderRadius='4px'
                      onClick={(event) =>
                        this.props.handleFilter(event, item, 'launch_year')
                      }
                    >
                      {item}
                    </Button>
                  );
                })
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
            {this.props.getUniqueLaunchSuccessdata &&
            this.props.getUniqueLaunchSuccessdata.length > 0
              ? this.props.getUniqueLaunchSuccessdata.map((item) => {
                  return (
                    <Button
                      padding='6px 16px 6px 16px'
                      cursor='pointer'
                      bgColor='#90ee90'
                      color='#000'
                      border='none'
                      margin='7px'
                      borderRadius='4px'
                      onClick={(event) =>
                        this.props.handleFilter(event, item, 'launch_success')
                      }
                    >
                      {item ? 'True' : 'False'}
                    </Button>
                  );
                })
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
        </Div>
      </Div>
    );
  }
}

export default Filter;
