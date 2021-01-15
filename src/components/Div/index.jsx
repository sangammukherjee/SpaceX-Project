import styled from 'styled-components';
import { device } from '../../config/index';
export const Div = styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : '')};
  display: ${(props) => (props.display ? props.display : 'block')};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : '')};
  margin: ${(props) => (props.margin ? props.margin : '')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '')};
  padding: ${(props) => (props.padding ? props.padding : '')};

  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ''};
  @media only screen and ${device.xs} {
    display: ${(props) => (props.xsDisplay ? props.xsDisplay : '')};
    width: ${(props) => (props.xsWidth ? props.xsWidth : 'auto')};
    padding: ${(props) => (props.xsPadding ? props.xsPadding : '')};
    margin: ${(props) => (props.xsMargin ? props.xsMargin : '')};
    flex: ${(props) => (props.xsFlex ? props.xsFlex : '')};
  }
  @media only screen and ${device.sm} {
    margin: ${(props) => (props.smMargin ? props.smMargin : '')};
    display: ${(props) => (props.smDisplay ? props.smDisplay : '')};
    width: ${(props) => (props.smWidth ? props.smWidth : 'auto')};
  }
  @media only screen and ${device.lg} {
    display: ${(props) => (props.lgDisplay ? props.lgDisplay : '')};
    padding: ${(props) => (props.lgPadding ? props.lgPadding : '')};
    margin: ${(props) => (props.lgMargin ? props.lgMargin : '')};
    flex: ${(props) => (props.lgflex ? props.lgflex : '')};
    width: ${(props) => (props.lgWidth ? props.lgWidth : 'auto')};
  }
`;
