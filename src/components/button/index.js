import styled from 'styled-components';
import { device } from '../../config/index';
export const Button = styled.button`
  background-color: ${(props) => (props.selected ? '#68FF33' : '#90ee90')};
  display: ${(props) => (props.display ? props.display : '')};
  padding: ${(props) => (props.padding ? props.padding : '')};
  margin: ${(props) => (props.margin ? props.margin : '')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.color ? props.color : '')};
  border: ${(props) => (props.border ? props.border : '')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '')};
  opacity: ${(props) => (props.disabled ? '0.60' : '1')};
  outline: 0;
  @media only screen and ${device.xs} {
    margin: ${(props) => (props.xsMargin ? props.xsMargin : '')};
  }
  @media only screen and ${device.sm} {
    margin: ${(props) => (props.smMargin ? props.smMargin : '')};
  }
`;
