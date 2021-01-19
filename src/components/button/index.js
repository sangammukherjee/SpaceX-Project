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
  //outline: 0;
  @media (min-width: 1281px) {
    margin: ${(props) => (props.deskMargin ? props.deskMargin : '')};
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin: ${(props) => (props.lapMargin ? props.lapMargin : '')};
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: ${(props) => (props.tabMargin ? props.tabMargin : '')};
  }
  @media (min-width: 481px) and (max-width: 767px) {
    margin: ${(props) => (props.lmMargin ? props.lmMargin : '')};
    margin: ${(props) => (props.lmMargin ? props.lmMargin : '')};
  }
  @media (min-width: 320px) and (max-width: 480px) {
    flex: ${(props) => (props.smflex ? props.smflex : '')};
    margin: ${(props) => (props.smMargin ? props.smMargin : '')};
  }
  @media (max-width: 320px) {
    margin: ${(props) => (props.xsMargin ? props.xsMargin : '')};
    flex: ${(props) => (props.xsflex ? props.xsflex : '')};
  }
`;
