import styled from 'styled-components';
import { device } from '../../config/index';
export const P = styled.p`
  color: ${(props) => (props.color ? props.color : '')};
  margin: ${(props) => (props.margin ? props.margin : '')};
  padding: ${(props) => (props.padding ? props.padding : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '')};

  display: ${(props) => (props.display ? props.display : '')};
  width: ${(props) => (props.width ? props.width : '')};

  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ''};
  border-bottom: ${(props) => (props.borderBottom ? props.borderBottom : '')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : '')};

  @media only screen and ${device.xs} {
    font-size: ${(props) => (props.xsFontSize ? props.xsFontSize : '')};
  }
  @media only screen and ${device.sm} {
    font-size: ${(props) => (props.smFontSize ? props.smFontSize : '')};
  }
  @media only screen and ${device.lg} {
    font-size: ${(props) => (props.lgFontSize ? props.lgFontSize : '')};
  }
`;
