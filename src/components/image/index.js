import styled from 'styled-components';
import { device } from '../../config/index';
export const Image = styled.img`
  height: ${(props) => (props.imgHeight ? props.imgHeight : '')};
  display: ${(props) => (props.display ? props.display : '')};
  padding: ${(props) => (props.padding ? props.padding : '')};
  margin: ${(props) => (props.margin ? props.margin : '')};
  width: ${(props) => (props.imgWidth ? props.imgWidth : '')};
`;
