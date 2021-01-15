import styled from 'styled-components';
export const Li = styled.li`
  background-color: ${(props) => (props.bgColor ? props.bgColor : '')};
  display: ${(props) => (props.display ? props.display : '')};
  padding: ${(props) => (props.padding ? props.padding : '')};
  margin: ${(props) => (props.margin ? props.margin : '')};
  color: ${(props) => (props.color ? props.color : '')};
`;
