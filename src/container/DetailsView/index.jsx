import React, { Component, Fragment } from 'react';
import { Div } from '../../components/Div';
import { Image } from '../../components/image';
import { H1 } from '../../components/H1';
import { Span } from '../../components/span';
import { P } from '../../components/P';
import Loader from '../../components/Loader';
import { Li } from '../../components/li';

class DetailsView extends Component {
  render() {
    return (
      <Div display='flex' flexWrap='wrap' lgflex='1'>
        {this.props.isDataFetching ? (
          <Loader />
        ) : (
          this.props.fetchedData &&
          this.props.fetchedData.length > 0 &&
          this.props.fetchedData.map((item) => {
            return (
              <Div
                bgColor='#fff'
                borderRadius='6px'
                padding='21px'
                lgflex='1'
                margin='0px 20px 20px 0px'
              >
                <Div display='flex' justifyContent='center' bgColor='#eeeeee'>
                  <Image
                    src={item.links.mission_patch_small}
                    imgWidth='180px'
                    imgHeight='180px'
                  />
                </Div>
                <Div>
                  <H1
                    margin='0'
                    fontSize='18px'
                    color='blue'
                  >{`${item.mission_name}#${item.flight_number}`}</H1>
                </Div>

                <Div>
                  <P margin='0' color='#000' fontWeight='700'>
                    Mission IDs :
                  </P>
                  {item.mission_id && item.mission_id.length > 0
                    ? item.mission_id.map((ID) => {
                        return <Li>{ID}</Li>;
                      })
                    : "No ID's Found"}
                </Div>
                <Div display='flex'>
                  <P margin='0' color='#000' fontWeight='700'>
                    Launch Year :
                  </P>
                  <Span>{item.launch_year}</Span>
                </Div>
                <Div display='flex'>
                  <P color='#000' fontWeight='700' margin='0'>
                    Successfully Launch :
                  </P>
                  <Span>{item.launch_success ? 'True' : 'False'}</Span>
                </Div>
                <Div display='flex'>
                  <P color='#000' fontWeight='700' margin='0'>
                    Successfully Landing :
                  </P>
                  <Span></Span>
                </Div>
              </Div>
            );
          })
        )}
      </Div>
    );
  }
}

export default DetailsView;
