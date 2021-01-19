import React, { Component } from 'react';
import { Button } from '../../components/button';
import { Div } from '../../components/Div';
import { H1 } from '../../components/H1';
import { P } from '../../components/P';

class Filter extends Component {
  render() {
    return (
      <Div
        deskWidth='15%'
        lapWidth='18%'
        tabWidth='20%'
        lapPadding='10px'
        tabPadding='10px'
        deskPadding='10px'
        bgColor='#ffffff'
        lapMargin='0 0 0 10px'
        tabMargin='0 0 0 10px'
        deskMargin='0 0 0 10px'
        smMargin='0px 0px 20px 0'
        lmMargin='0px 0px 20px 0'
        xsMargin='0px 0px 20px 0'
      >
        <Div display='flex' margin='0 0 10px 0' xsPadding='20px'>
          <H1
            margin='0'
            padding='0 0 0 10px'
            lapFontSize='22px'
            deskFontSize='22px'
            tabFontSize='18px'
            flex='1'
          >
            Filters
          </H1>
          <Button
            padding='6px 16px 6px 16px'
            bgColor='#90ee90'
            color='#000'
            border='none'
            margin='6px 10px 0 0'
            borderRadius='4px'
            tabMargin=' 0'
            onClick={this.props.handleResetFilters}
            disabled={this.props.isClearButtonDisable}
          >
            Clear
          </Button>
        </Div>

        <Div
          smWidth='240px'
          lmWidth='250px'
          smMargin='0 auto'
          lmMargin='0 auto'
          xsWidth='200px'
          xsMargin='0 auto'
        >
          <P
            margin='0 auto'
            borderBottom='1px solid #dddddd'
            display='flex'
            padding='0 0 6px 0'
            justifyContent='center'
            width='auto'
            smWidth='auto'
          >
            Launch Year
          </P>
          <Div display='flex' flexWrap='wrap' justifyContent='center'>
            {this.props.filterOptionsData
              ? this.props.filterOptionsData.launch_year_data_array.map(
                  (item, i) => {
                    return (
                      <Button
                        key={i}
                        padding='6px 16px 6px 16px'
                        cursor='pointer'
                        color='#000'
                        border='none'
                        deskMargin='10px 10px'
                        lapMargin='10px 8px'
                        tabMargin='10px 5px'
                        smMargin='8px 10px'
                        lmMargin='8px 12px'
                        xsMargin='8px 10px'
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
        <Div
          margin='20px 0 0 0'
          smWidth='250px'
          lmWidth='250px'
          smMargin='0 auto'
          lmMargin='0 auto'
        >
          <P
            margin='0 auto'
            borderBottom='1px solid #dddddd'
            display='flex'
            padding='0 0 6px 0'
            justifyContent='center'
          >
            Successful Launch
          </P>
          <Div display='flex' flexWrap='wrap' justifyContent='center'>
            {this.props.filterOptionsData
              ? this.props.filterOptionsData.launch_success_data_array.map(
                  (item, i) => {
                    return (
                      <Button
                        key={i}
                        padding='6px 16px 6px 16px'
                        cursor='pointer'
                        color='#000'
                        border='none'
                        smMargin='8px 12px'
                        lmMargin='8px 12px'
                        deskMargin='10px 10px'
                        lapMargin='10px 8px'
                        xsMargin='8px 10px'
                        tabMargin='10px 5px'
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
                        selected={
                          this.props.selectedLaunchSuccessValue === item.id
                        }
                      >
                        {item.displayName}
                      </Button>
                    );
                  }
                )
              : null}
          </Div>
        </Div>
        <Div
          margin='20px 0 0 0'
          smWidth='250px'
          lmWidth='250px'
          lmMargin='0 auto'
          smMargin='0 auto'
        >
          <P
            margin='0 auto'
            borderBottom='1px solid #dddddd'
            display='flex'
            padding='0 0 6px 0'
            justifyContent='center'
          >
            Successful Landing
          </P>
          <Div display='flex' flexWrap='wrap' justifyContent='center'>
            {this.props.filterOptionsData
              ? this.props.filterOptionsData.launch_landed_data_array.map(
                  (item, i) => {
                    return (
                      <Button
                        padding='6px 16px 6px 16px'
                        key={i}
                        cursor='pointer'
                        color='#000'
                        border='none'
                        deskMargin='10px 10px'
                        lapMargin='10px 8px'
                        xsMargin='8px 10px'
                        tabMargin='10px 5px'
                        lmMargin='8px 12px'
                        borderRadius='4px'
                        selected={
                          this.props.selectedLandedSuccessValue === item.id
                        }
                        smMargin='8px 10px'
                        onClick={(event) => {
                          this.props.handleFilter(
                            event,
                            item.value,
                            'land_success',
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
