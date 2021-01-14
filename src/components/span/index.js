import styled from 'styled-components';
import { device } from '../../config/index';
export const Span = styled.span`
  background-color: ${(props) => (props.bgColor ? props.bgColor : '')};
  display: ${(props) => (props.display ? props.display : '')};
  padding: ${(props) => (props.padding ? props.padding : '')};
  margin: ${(props) => (props.margin ? props.margin : '')};
  cursor: ${(props) => (props.cursor ? props.cursor : '')};
  color: ${(props) => (props.color ? props.color : '')};
  border: ${(props) => (props.border ? props.border : '')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '')};
  @media only screen and ${device.sm} {
  }
`;
