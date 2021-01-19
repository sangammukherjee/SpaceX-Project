import styled from 'styled-components';
import { device } from '../../config/index';
export const H1 = styled.h1`
  color: ${(props) => (props.color ? props.color : '')};
  margin: ${(props) => (props.margin ? props.margin : '')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '')};
  flex: ${(props) => (props.flex ? props.flex : '')};
  padding: ${(props) => (props.padding ? props.padding : '')};

  @media (min-width: 1281px) {
    font-size: ${(props) => (props.deskFontSize ? props.deskFontSize : '')};
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: ${(props) => (props.lapFontSize ? props.lapFontSize : '')};
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: ${(props) => (props.tabFontSize ? props.tabFontSize : '')};
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: ${(props) => (props.lmFontSize ? props.lmFontSize : '')};
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: ${(props) => (props.smFontSize ? props.smFontSize : '')};
  }
`;
