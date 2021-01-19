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

  @media (min-width: 1281px) {
    display: ${(props) => (props.deskDisplay ? props.deskDisplay : '')};
    padding: ${(props) => (props.deskPadding ? props.deskPadding : '')};
    margin: ${(props) => (props.deskMargin ? props.deskMargin : '')};
    flex: ${(props) => (props.deskflex ? props.deskflex : '')};
    width: ${(props) => (props.deskWidth ? props.deskWidth : 'auto')};
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    display: ${(props) => (props.lapDisplay ? props.lapDisplay : '')};
    padding: ${(props) => (props.lapPadding ? props.lapPadding : '')};
    margin: ${(props) => (props.lapMargin ? props.lapMargin : '')};
    flex: ${(props) => (props.lapflex ? props.lapflex : '')};
    width: ${(props) => (props.lapWidth ? props.lapWidth : 'auto')};
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: ${(props) => (props.tabDisplay ? props.tabDisplay : '')};
    padding: ${(props) => (props.tabPadding ? props.tabPadding : '')};
    margin: ${(props) => (props.tabMargin ? props.tabMargin : '')};
    flex: ${(props) => (props.tabflex ? props.tabflex : '')};
    width: ${(props) => (props.tabWidth ? props.tabWidth : 'auto')};
  }
  @media (min-width: 481px) and (max-width: 767px) {
    display: ${(props) => (props.lmDisplay ? props.lmDisplay : '')};
    padding: ${(props) => (props.lmPadding ? props.lmPadding : '')};
    margin: ${(props) => (props.lmMargin ? props.lmMargin : '')};
    flex: ${(props) => (props.lmflex ? props.lmflex : '')};
    width: ${(props) => (props.lmWidth ? props.lmWidth : 'auto')};
  }
  @media (min-width: 320px) and (max-width: 480px) {
    display: ${(props) => (props.smDisplay ? props.smDisplay : '')};
    padding: ${(props) => (props.smPadding ? props.smPadding : '')};
    margin: ${(props) => (props.smMargin ? props.smMargin : '')};
    flex: ${(props) => (props.smflex ? props.smflex : '')};
    width: ${(props) => (props.smWidth ? props.smWidth : 'auto')};
  }
  @media (max-width: 320px) {
    display: ${(props) => (props.xsDisplay ? props.xsDisplay : '')};
    padding: ${(props) => (props.xsPadding ? props.xsPadding : '')};
    margin: ${(props) => (props.xsMargin ? props.xsMargin : '')};
    flex: ${(props) => (props.xsflex ? props.xsflex : '')};
    width: ${(props) => (props.xsWidth ? props.xsWidth : 'auto')};
 }
`;
