import styled from 'styled-components';
import { device } from '../../config/index';
export const H1 = styled.h1`
  color: ${(props) => (props.color ? props.color : '')};
  margin: ${(props) => (props.margin ? props.margin : '')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '')};
  flex: ${(props) => (props.flex ? props.flex : '')};
  padding: ${(props) => (props.padding ? props.padding : '')};

  @media only screen and ${device.xs} {
    font-size: ${(props) => (props.xsFontSize ? props.xsFontSize : '')};
    padding: ${(props) => (props.xsPadding ? props.xsPadding : '')};
  }
  @media only screen and ${device.sm} {
    font-size: ${(props) => (props.smFontSize ? props.smFontSize : '')};
  }
  @media only screen and ${device.lg} {
    font-size: ${(props) => (props.lgFontSize ? props.lgFontSize : '')};
  }
`;
